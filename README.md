INSTRUCCIONES DE INSTALACION:
-----------------------------
LIBRERIAS NECESARIAS:
- expo-cli
- @react-navigation/native
- @react-navigation/native-stack
- firebase
- react-native-elements
- expo-constants

CONFIGURACION Y CREACION DEL PROYECTO:
npx create-expo-app MiComidaFavorita --template blank
cd MiComidaFavorita

Instalar dependencias
npm install @react-navigation/native @react-navigation/native-stack
npm install firebase
npm install react-native-elements
npm install expo-constants
npm install react-native-safe-area-context

CONFIGURAR FIREBASE:

1. Ir a Firebase Console (https://console.firebase.google.com/)
2. Crear nuevo proyecto "MiComidaFavorita"
3. Habilitar Authentication (Email/Password)
4. Crear Cloud Firestore
5. Registrar la aplicación web
6. Copiar configuración de Firebase
 
 ESTRUCTURA DEL PROYECTO:
-------------------------

![ESTRUCTURA DEL PROJECT](https://github.com/user-attachments/assets/8bbad412-e621-4f74-8fbf-7ab384864090)

FINALMENTE LEVANTAMOS EL PROYECTO:
----------------------------------
- Asegurarse de que todas las dependencias estén instaladas:
   npm install
- Iniciar la aplicación:
  npx expo start
  se puede probar a traves de la app Expo Go escaneando el QR

1.- MEJORAS EN EL FORMULARIO REGISTRO.
VALIDACIONES REALIZADAS DE TODOS LOS CAMPOS:
- Email valido: La expresión regular verifica que una cadena siga el formato básico de un correo electrónico.
- Clave Correcta: La Expresion regular verifica que la cadena contenga al menos 8 caracteres y que en la misma solo puede contener letras (mayúsculas o minúsculas), números y los caracteres especiales mencionados !@#.$%^&*.
- Agregamos un campo de confirmación de contraseña.
- Validacion de que ambas contrasenas introducidas sean iguales.
- cada validacion tiene un tipo de error especifico.
  
![2](https://github.com/user-attachments/assets/4fb49c72-a394-4a97-a045-0474d0e79511)

2.- MEJORAS EN EL FORMULARIO LOGIN.

- Validacion formato de email
- Validacion que la contraseña no esté vacía
- Deshabilitado el botón de login mientras los campos sean inválidos.

![PANT LOGIN](https://github.com/user-attachments/assets/ea4ffd46-cffe-4615-a4d9-11a66a156601)
