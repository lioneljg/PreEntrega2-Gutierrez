// Validación adicional para el formulario de contacto - Hosanna

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[action*="formsubmit.co"]');
    if (!form) return;

    const nombreInput = form.querySelector('input[name="nombre"]');
    const apellidoInput = form.querySelector('input[name="apellido"]');
    const telefonoInput = form.querySelector('input[name="telefono"]');
    const emailInput = form.querySelector('input[name="email"]');
    const mensajeInput = form.querySelector('textarea[name="mensaje"]');
    const interesSelect = form.querySelector('select[name="interes"]');

    // Función para mostrar mensaje de error
    function showError(input, message) {
        const formControl = input.parentElement;
        const errorDiv = formControl.querySelector('.error-message') || document.createElement('div');
        errorDiv.className = 'error-message text-danger small mt-1';
        errorDiv.textContent = message;
        
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorDiv);
        }
        
        input.classList.add('is-invalid');
    }

    // Función para remover mensaje de error
    function removeError(input) {
        const formControl = input.parentElement;
        const errorDiv = formControl.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        input.classList.remove('is-invalid');
    }

    // Validación de nombre
    function validateNombre() {
        const value = nombreInput.value.trim();
        if (value.length < 2) {
            showError(nombreInput, 'El nombre debe tener al menos 2 caracteres');
            return false;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
            showError(nombreInput, 'El nombre solo puede contener letras');
            return false;
        }
        removeError(nombreInput);
        return true;
    }

    // Validación de apellido
    function validateApellido() {
        const value = apellidoInput.value.trim();
        if (value.length < 2) {
            showError(apellidoInput, 'El apellido debe tener al menos 2 caracteres');
            return false;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
            showError(apellidoInput, 'El apellido solo puede contener letras');
            return false;
        }
        removeError(apellidoInput);
        return true;
    }

    // Validación de teléfono
    function validateTelefono() {
        const value = telefonoInput.value.trim();
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) {
            showError(telefonoInput, 'Ingresa un número de teléfono válido');
            return false;
        }
        removeError(telefonoInput);
        return true;
    }

    // Validación de email
    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(emailInput, 'Ingresa un email válido');
            return false;
        }
        removeError(emailInput);
        return true;
    }

    // Validación de mensaje
    function validateMensaje() {
        const value = mensajeInput.value.trim();
        if (value.length < 10) {
            showError(mensajeInput, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        }
        if (value.length > 1000) {
            showError(mensajeInput, 'El mensaje no puede exceder 1000 caracteres');
            return false;
        }
        removeError(mensajeInput);
        return true;
    }

    // Validación de interés
    function validateInteres() {
        const value = interesSelect.value;
        if (!value) {
            showError(interesSelect, 'Por favor selecciona un servicio de interés');
            return false;
        }
        removeError(interesSelect);
        return true;
    }

    // Event listeners para validación en tiempo real
    nombreInput.addEventListener('blur', validateNombre);
    nombreInput.addEventListener('input', () => removeError(nombreInput));
    
    apellidoInput.addEventListener('blur', validateApellido);
    apellidoInput.addEventListener('input', () => removeError(apellidoInput));
    
    telefonoInput.addEventListener('blur', validateTelefono);
    telefonoInput.addEventListener('input', () => removeError(telefonoInput));
    
    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', () => removeError(emailInput));
    
    mensajeInput.addEventListener('blur', validateMensaje);
    mensajeInput.addEventListener('input', () => removeError(mensajeInput));
    
    interesSelect.addEventListener('change', validateInteres);

    // Validación al enviar el formulario
    form.addEventListener('submit', function(e) {
        let isValid = true;
        
        isValid = validateNombre() && isValid;
        isValid = validateApellido() && isValid;
        isValid = validateTelefono() && isValid;
        isValid = validateEmail() && isValid;
        isValid = validateMensaje() && isValid;
        isValid = validateInteres() && isValid;

        if (!isValid) {
            e.preventDefault();
            
            // Mostrar mensaje de error general
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="bi bi-exclamation-triangle"></i> Revisa los errores';
            submitButton.classList.add('btn-danger');
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.classList.remove('btn-danger');
            }, 3000);
            
            // Scroll al primer error
            const firstError = form.querySelector('.is-invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            // Mostrar indicador de envío
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';
            submitButton.disabled = true;
            
            // Restaurar después de 5 segundos (por si hay error de red)
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 5000);
        }
    });

    // Mejorar UX: Auto-completar nombre y apellido
    nombreInput.addEventListener('input', function() {
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    });
    
    apellidoInput.addEventListener('input', function() {
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    });

    // Formatear teléfono automáticamente
    telefonoInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 2) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 2) + '-' + value.slice(2);
            } else if (value.length <= 10) {
                value = value.slice(0, 2) + '-' + value.slice(2, 6) + '-' + value.slice(6);
            } else {
                value = value.slice(0, 2) + '-' + value.slice(2, 6) + '-' + value.slice(6, 10);
            }
        }
        this.value = value;
    });
}); 