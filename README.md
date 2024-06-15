# frontchordiak

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Para poder hacer la instalación del back es necesario tener primero es instalar laragon, para esto se recomienda hacer una carpeta en la cual vamos a instalar laragon como nos proporciona el usuario de instalación de laragon, https://laragon.org/download/, este download directamente nos instala php y MySql junto con las cuestiones necesarias, una vez se haya instalado laragon.

Lo siguiente es instalar composer

Descarga el instalador de Composer:

Visita la página oficial de descarga de Composer: https://getcomposer.org/
En la sección "Descargar", elige el instalador adecuado para tu versión de PHP (32 bits o 64 bits).
Descarga el archivo instalador (.exe) a tu ordenador.
Ejecuta el instalador:

Busca el archivo instalador de Composer que has descargado.
Haz doble clic en el archivo instalador para iniciar el asistente de instalación.
Mensaje de bienvenida y acuerdo de licencia:

Lee atentamente el mensaje de bienvenida y el acuerdo de licencia.
Si estás de acuerdo con los términos, haz clic en el botón "Siguiente".
Opciones de instalación:

Selecciona el tipo de instalación: "Típica" para una instalación predeterminada o "Personalizada" para opciones avanzadas.
Elige el directorio de instalación donde deseas instalar Composer.
Haz clic en "Siguiente" para continuar.
Instalación global o local:

Elige si deseas instalar Composer de forma global o local.
Global: Instala Composer globalmente, accesible desde cualquier directorio usando el comando composer.
Local: Instala Composer solo para el directorio del proyecto actual.
Configuración de PHP:

Selecciona si deseas utilizar tu configuración de PHP existente o proporcionar una ruta de PHP personalizada.
Listo para instalar:

Revisa el resumen de la instalación, incluyendo el directorio de instalación elegido, el tipo de instalación y la configuración de PHP.
Haz clic en el botón "Instalar" para iniciar el proceso de instalación.
Progreso de la instalación:

El instalador descargará e instalará los archivos necesarios y configurará los ajustes del sistema.
Sigue las indicaciones o instrucciones que aparezcan durante el proceso de instalación.
Instalación completada:

Una vez finalizada la instalación, se mostrará un mensaje de éxito.
Haz clic en el botón "Finalizar" para cerrar el instalador.

Se debe seguir la el siguiente tutorial de instalación que aparece como proyecto de solo pinia, esto es debido a que las dependecias de pinia deben ser instaladas desde el inicio o el archivo crasheara, el link del video es el siguiente: https://www.youtube.com/watch?v=6JYtpjPnWvM&list=PLHKz_v5gkcSpfHYWju4nC-nyuS-FOpcWS&index=2, seguir los pasos de la 00:41 al 1:41.

Lo siguiente es clonar el repositorio de github dentro de la carpeta donde esta instalado laragon por cmd.
Deben ser dos carpetas, una donde se encuentra el back y otra donde se encuentra el front,
Link del back: https://github.com/nosedhd/BackChordiak.git
Link del front: https://github.com/nosedhd/FrontChordiak.git
 
Pasos para clonar un repositorio de GitHub dentro de una carpeta usando cmd
Para clonar un repositorio de GitHub en una carpeta específica usando el símbolo del sistema, siga estos pasos:

Requisitos previos:

Git instalado: Asegúrese de tener Git instalado en su sistema. Puede verificar la versión de Git ejecutando git --version en el símbolo del sistema.

Cuenta de GitHub: Tenga una cuenta de GitHub y acceso al repositorio que desea clonar.

Símbolo del sistema: Abra una ventana del símbolo del sistema o terminal.

Pasos de clonación:

Navegar al directorio de destino:

Use el comando cd para navegar al directorio principal donde desea clonar el repositorio y crear la carpeta específica. Por ejemplo, si desea clonar el repositorio en una carpeta llamada "mi-proyecto" dentro del directorio "Proyectos", use los siguientes comandos:

cd C:\Users\<su-nombre-de-usuario>\Proyectos
mkdir mi-proyecto
cd mi-proyecto

Clonar repositorio:

Use el siguiente comando git clone para clonar el repositorio en la carpeta especificada:


git clone https://github.com/<nombre-de-usuario>/<nombre-del-repositorio>.git

Reemplace <nombre-de-usuario> con el nombre de usuario real de GitHub del propietario del repositorio y <nombre-del-repositorio> con el nombre real del repositorio.

Ejemplo:

Clonar el repositorio mi-repositorio del usuario githubuser en la carpeta mi-proyecto usaría el siguiente comando:


git clone https://github.com/githubuser/mi-repositorio.git

Explicación del comando:

git clone: Este es el comando de Git para clonar un repositorio.

https://github.com/<nombre-de-usuario>/<nombre-del-repositorio>.git: Esta es la URL del repositorio de GitHub que desea clonar.

.git: Esto especifica que la URL apunta a un repositorio de Git.

Pasos posteriores a la clonación:

Cambiar directorio:

Una vez que la clonación haya finalizado, navegue a la carpeta del repositorio clonado usando el comando cd:


cd mi-repositorio

Verificar clonación:

Compruebe si la clonación fue exitosa enumerando el contenido del directorio:

dir


Debería ver los archivos y carpetas del repositorio clonado.

Esto clonará el repositorio de GitHub especificado en la carpeta designada dentro de su estructura de directorios. Luego puede proceder a trabajar en el repositorio clonado como de costumbre.


Para instalar las dependencias debemos entrar al cmd de la carpeta y ejecutar el comando


npm i

De esta manera se descargan todas las dependencias

Para empezar los proyectos, se debe primero entrar a laragon, iniciar laragon en el boton que dice "iniciar", luego de esto se debe iniciarlizar el back y el front, el front se inicializa con el comando en el cmd del back

npm run dev

que nos va a dar el siguiente mensaje
Local:   http://localhost:5173/
esta es el url que se debe colocar en su navegador favorito

Mientras que el front se inicializa con el siguiente comando en el cmd del front

php artisan serve
cuando se haga esto va a salir:

Server running on [http://127.0.0.1:8000]

esta es la ruta que van a colocar dentro de la ruta de la base de datos que de igual forma se configura de manera automatica con laragon, mas que todo esto sirve para poder tener acceso a la base de datos de heidiSql, por ultimo, con el back, el front y laragon prendidos, entrar al http://localhost:5173/ y ya funcionaria.