import { useState, useCallback } from 'react';

/**
 * Form Validation Rules
 */
const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Email inválido'
  },
  phone: {
    pattern: /^\+?[0-9]{8,}$/,
    message: 'Teléfono debe tener al menos 8 dígitos'
  },
  name: {
    pattern: /^[a-záéíóúñ\s]{2,}$/i,
    message: 'Nombre debe tener al menos 2 caracteres'
  },
  company: {
    pattern: /^[a-záéíóúñ0-9\s\.,]{2,}$/i,
    message: 'Nombre de empresa inválido'
  },
  required: {
    pattern: /.+/,
    message: 'Este campo es requerido'
  }
};

/**
 * Custom Hook for Form Validation
 * @param {Object} initialValues - Form initial values
 * @param {Function} onSubmit - Submit callback
 * @param {Object} validationSchema - Validation rules by field
 * @returns {Object} Form state y methods
 */
export const useFormValidation = (initialValues = {}, onSubmit = () => {}, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Validate a single field
   */
  const validateField = useCallback((fieldName, fieldValue) => {
    const rules = validationSchema[fieldName];
    if (!rules) return null;

    // Check if field is required y empty
    if (rules.required && !fieldValue?.toString().trim()) {
      return VALIDATION_RULES.required.message;
    }

    // Check pattern validation
    if (rules.type && VALIDATION_RULES[rules.type]) {
      const rule = VALIDATION_RULES[rules.type];
      if (!rule.pattern.test(fieldValue)) {
        return rule.message;
      }
    }

    // Check custom validation
    if (rules.validate) {
      const customError = rules.validate(fieldValue);
      if (customError) return customError;
    }

    // Check min length
    if (rules.minLength && fieldValue?.toString().length < rules.minLength) {
      return `Mínimo ${rules.minLength} caracteres`;
    }

    // Check max length
    if (rules.maxLength && fieldValue?.toString().length > rules.maxLength) {
      return `Máximo ${rules.maxLength} caracteres`;
    }

    return null;
  }, [validationSchema]);

  /**
   * Validate entire form
   */
  const validate = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(values).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  /**
   * Handle input change
   */
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues((prev) => ({
      ...prev,
      [name]: newValue
    }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error
      }));
    }
  }, [touched, validateField]);

  /**
   * Handle blur to mark field as touched
   */
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback((e) => {
    e?.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      try {
        onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [validate, onSubmit, values]);

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  /**
   * Set field value manually
   */
  const setFieldValue = useCallback((fieldName, fieldValue) => {
    setValues((prev) => ({
      ...prev,
      [fieldName]: fieldValue
    }));
  }, []);

  /**
   * Set field error manually
   */
  const setFieldError = useCallback((fieldName, error) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error
    }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
    setFieldError,
    validate,
    validateField
  };
};
