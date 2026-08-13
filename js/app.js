const { createApp } = Vue;

createApp({
    data() {
        return {
            // Cálculo de calificaciones
            nota1: null,
            nota2: null,
            nota3: null,
            asistencia: null,
            nota1Error: '',
            nota2Error: '',
            nota3Error: '',
            asistenciaError: '',
            promedio: 0,
            aprobado: false,
            resultadoVisible: false,
            mensajeResultado: '',

            // Formulario de registro
            nombre: '',
            correo: '',
            password: '',
            repeatPassword: '',
            nombreError: '',
            correoError: '',
            passwordError: '',
            repeatPasswordError: ''
        };
    },
    methods: {
        validarNota1() {
            if (this.nota1 === null || this.nota1 === '') {
                this.nota1Error = 'La nota 1 es obligatoria';
            } else if (this.nota1 < 10 || this.nota1 > 70) {
                this.nota1Error = 'La nota 1 debe estar entre 10 y 70';
            } else {
                this.nota1Error = '';
            }
        },
        validarNota2() {
            if (this.nota2 === null || this.nota2 === '') {
                this.nota2Error = 'La nota 2 es obligatoria';
            } else if (this.nota2 < 10 || this.nota2 > 70) {
                this.nota2Error = 'La nota 2 debe estar entre 10 y 70';
            } else {
                this.nota2Error = '';
            }
        },
        validarNota3() {
            if (this.nota3 === null || this.nota3 === '') {
                this.nota3Error = 'La nota 3 es obligatoria';
            } else if (this.nota3 < 10 || this.nota3 > 70) {
                this.nota3Error = 'La nota 3 debe estar entre 10 y 70';
            } else {
                this.nota3Error = '';
            }
        },
        validarAsistencia() {
            if (this.asistencia === null || this.asistencia === '') {
                this.asistenciaError = 'La asistencia es obligatoria';
            } else if (this.asistencia < 0 || this.asistencia > 100) {
                this.asistenciaError = 'La asistencia debe estar entre 0 y 100';
            } else {
                this.asistenciaError = '';
            }
        },
        calcular() {
            this.validarNota1();
            this.validarNota2();
            this.validarNota3();
            this.validarAsistencia();

            if (this.nota1Error || this.nota2Error || this.nota3Error || this.asistenciaError) {
                return;
            }

            this.promedio = (this.nota1 * 0.35 + this.nota2 * 0.35 + this.nota3 * 0.30).toFixed(2);

            if (this.promedio >= 40 && this.asistencia >= 80) {
                this.aprobado = true;
                this.mensajeResultado = 'APROBADO';
            } else {
                this.aprobado = false;
                this.mensajeResultado = 'REPROBADO';
            }

            this.resultadoVisible = true;
        },

        limpiar() {
            this.nota1 = null;
            this.nota2 = null;
            this.nota3 = null;
            this.asistencia = null;
            this.nota1Error = '';
            this.nota2Error = '';
            this.nota3Error = '';
            this.asistenciaError = '';
            this.promedio = 0;
            this.aprobado = false;
            this.resultadoVisible = false;
            this.mensajeResultado = '';
        },

        validarNombre() {
            if (!this.nombre.trim()) {
                this.nombreError = 'El nombre es obligatorio';
            } else {
                this.nombreError = '';
            }
        },
        validarCorreo() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.correo.trim()) {
                this.correoError = 'El correo es obligatorio';
            } else if (!emailRegex.test(this.correo)) {
                this.correoError = 'El formato del correo no es válido';
            } else {
                this.correoError = '';
            }
        },
        validarPassword() {
            if (!this.password) {
                this.passwordError = 'La contraseña es obligatoria';
            } else {
                this.passwordError = '';
            }
            if (this.repeatPassword) {
                this.validarRepeatPassword();
            }
        },
        validarRepeatPassword() {
            if (!this.repeatPassword) {
                this.repeatPasswordError = 'Debe repetir la contraseña';
            } else if (this.password !== this.repeatPassword) {
                this.repeatPasswordError = 'Las contraseñas no coinciden';
            } else {
                this.repeatPasswordError = '';
            }
        },
        enviarRegistro() {
            this.validarNombre();
            this.validarCorreo();
            this.validarPassword();
            this.validarRepeatPassword();

            if (this.nombreError || this.correoError || this.passwordError || this.repeatPasswordError) {
                return;
            }

            alert('El registro se ha realizado correctamente');
            this.nombre = '';
            this.correo = '';
            this.password = '';
            this.repeatPassword = '';
            this.nombreError = '';
            this.correoError = '';
            this.passwordError = '';
            this.repeatPasswordError = '';
        }
    }
}).mount('#app');
