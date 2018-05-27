'use strict';

module.exports = {
  title: 'Uso del comando',
  titleError: 'Error :warning:',
  titleComp: 'Listo :white_check_mark:',
  unknownChannel: 'Canal desconocido.',
  unknownRole: 'Rol desconocido.',
  unknownMessage: 'Mensaje desconocido.',
  unknownEmoji: 'Emoji desconocido.',
  premium: 'Esta característica es solo para [donantes](https://zira.pw/premium).',
  noChannel: ['Por favor establece un canal primero con **', 'canal**.'],
  noMessage: ['Por favor establece un mensaje para usar con **', 'message**.'],
  help: {
    commandsTitle: 'Comandos',
    commands: {
      channel: 'establece el canal que quieres usar\n',
      message: 'establece el mensaje que quieres usar\n',
      add: 'añade un rol con un emoji\n',
      toggle: 'añade un rol que puede ser alternado\n',
      remove: 'remueve un rol establecido\n',
      edit: 'edita un mensaje enviado por Zira\n',
      list: 'muestra una lista de roles usados\n',
      autorole: 'otorga un rol al unirse automáticamente a usuarios y bots\n',
      log: 'registra cuando Zira da/quita un rol\n',
      join: 'envía un mensaje cuando un usuario se une\n',
      leave: 'envía un mensaje cuando un usuario se va\n',
      lang: 'establece el idioma\n',
      reset: 'restablece los ajustes del servidor\n',
      info: 'información acerca de Zira\n',
      faq: 'preguntas frecuentes\n',
      ping: 'muestra la latencia de Zira\n',
      invite: 'invita a Zira\n',
      suggestion: 'establece el canal a usar para las sugerencias\n',
      submit: 'envía una sugerencia\n',
      approve: 'establece una sugerencia como sugerencia aprobada\n',
      maybe: 'establece una sugerencia como sugerencia potencialmente aprobada\n',
      deny: 'establece una sugerencia como sugerencia denegada\n',
      once: 'añade un rol que solo puede ser reclamado una vez\n',
      calc: 'calculadora\n',
      purge: 'borra hasta 100 mensajes\n',
      config: 'ver los ajustes del servidor\n',
      prefix: 'cambia el prefijo del servidor\n',
    },
    categories: {
      role: 'Roles',
      logs: 'Registros',
      suggestion: 'Sugerencias',
      misc: 'Misceláneos',
    },
    linksTitle: 'Enlaces',
    links: '[Guía para configurar a Zira](https://demo.zira.pw)\n[Servidor de ayuda](https://zira.pw/support)\n[Dashboard de Zira](https://zira.pw)\n[Consigue Premium](https://zira.pw/premium)\n[Traduce a Zira](https://github.com/HazedSPaCEx/Zira-Translations)',
    news: 'News',
  },
  prefix: {
    help: 'prefix [prefijo]** ~~-~~ establece el prefijo del servidor\n\n`z/` y <@275813801792634880> aún serán usables',
    set: 'Prefijo establecido a ',
    error: 'El prefijo debe tener de 1 a 10 caracteres y contener uno de estos caracteres, `.` `/` `?` `[` `]` `\\` `<` `>` `-` `=` `+` `*` `^` `$` `!`',
  },
  config: {
    title: ' - Ajustes',
    currentChannel: 'Canal actual:',
    setChannel: 'establece un canal con',
    currentMessage: 'Mensaje actual:',
    setMessage: 'establece un mensaje con',
    roles: 'Roles establecidos:',
    rolesView: ' - míralos con ',
    rolesSet: 'añade algunos roles con',
    logging: 'Registros',
    join: 'Bienvenida',
    leave: 'Despedida',
    suggestions: 'Sugerencias',
    channel: 'Canal:',
    message: 'Mensaje:',
    suggestionChannel: 'Canal de sugerencias:',
    submitChannel: 'Canal de envíos:',
    prefix: 'Prefijo:',
    setPrefix: 'Establece un prefijo con',
    premium: 'Premium:',
    expire: 'Expira en ',
    buy: 'Comprar [Premium](https://zira.pw/premium)',
  },
  channel: {
    help: 'channel #canal** ~~-~~ establece el canal que será usado',
    set: 'Canal establecido a <#',
  },
  message: {
    help: 'message [[ID del mensaje](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) | mensaje]** ~~-~~ usa un mensaje existente o crea uno nuevo',
    cannotSend: ['No pude enviar un mensaje a <#', '> porque me falta el permiso `Enviar Mensajes`.'],
    cannotRead: ['No pude enviar un mensaje a <#', '> porque me falta el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    unknown: 'No se pudo enviar el mensaje.',
    cannotReadID: ['No pude conseguir el mensaje de <#', '> porque me falta el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    unknownID: 'No pude establecer el ID del mensaje.',
    set: 'Mensaje establecido con el ID ',
  },
  add: {
    help: 'add [emoji] [@rol | nombre del rol]** ~~-~~ añade un rol con un emoji al mensaje establecido',
    cannotRead: ['No pude reaccionar al mensaje en <#', '> porque me falta el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    cannotReact: ['No pude reaccionar al mensaje en <#', '> porque me falta el permiso `Añadir Reacciones`.'],
    unknown: 'No pude reaccionar al mensaje en <#',
    set: ['Rol <@&', '> añadido con el emoji ', '\n\n**NOTA:** El rol `Zira` tiene que estar arriba del rol que has establecido y tiene que tener el permiso `Administrar Roles` para dar este rol.'],
    emoji: 'Ese emoji ya está en uso en este mensaje.',
    role: 'Ese rol ya está en uso en este mensaje.',
  },
  toggle: {
    help: 'toggle [emoji] [@rol | nombre del rol]** ~~-~~ añade un rol con un emoji al mensaje establecido',
    image: 'https://stuff.zira.pw/files/1524932965273.gif',
    limit: 'Haz alcanzado el límite de 9 roles alternables. Puedes incrementar este límite a 18 [donando](https://zira.pw/premium)',
    limit18: 'Haz alcanzado el límite de 18 roles alternables.',
  },
  perm: {
    noPerm: 'Tienes que ser el dueño del servidor o tener el permiso `Administrar Roles` para usar estos comandos.',
    noLangPerm: 'Tienes que ser el dueño del servidor o tener el permiso `Administrar Servidor` para cambiar el lenguaje del bot.',
    noGuildPerm: 'Tienes que ser el dueño del servidor o tener el permiso `Administrar Servidor` para usar este comando.',
    noMessagePerm: 'You need be the owner of the guild, or have the `MANAGE_MESSAGES` permission to purge messages.',
  },
  lang: {
    langUpdate: 'Idioma actualizado.',
    translate: 'Si quieres que Zira esté en un lenguaje que no está en la lista de arriba, puedes ayudar a traducirla [aquí](https://github.com/HazedSPaCEx/Zira-Translations)',
  },
  log: {
    title: 'Comando Log',
    help: ['log #canal** ~~-~~ establece el canal para los registros\n\nPara detener los registros, usa **', 'log stop**\n\nHay un ejemplo abajo'],
    set: ['Canal de registros establecido a <#', '>\n\n**NOTA:** si Zira no puede enviar mensajes al canal, el registro será deshabilitado.'],
    stop: 'Los mensajes de registros ya no serán enviados.',
    image: 'https://stuff.zira.pw/files/logExample.png',
    give: [' reaccionó a ', ' para conseguir el rol '],
    remove: [' quitó su reacción a ', ' para quitarse el rol '],
  },
  faq: {
    title: 'Preguntas frecuentes',
    fields: [{
      name: '¿Cómo consigo el ID de un mensaje?',
      value: 'En PC, asegúrate que el Modo Desarrollador está activado en Ajustes de Usuario --> Apariencia. Una vez activado, ve a los tres puntos en el lado derecho del mensaje que quieres conseguir el ID y haz clic en Copiar ID en el menú.\n\nEn Android, asegúrate que el Modo Desarrollador está activado en los Ajustes de Usuario --> Comportamiento, luego mantén presionado el mensaje que quieres conseguir el ID y baja (si necesitas) para encontrar el botón Copiar ID, tócalo y el ID será copiado a tu portapapales.\n\niOS nunca tendrá esta característica debido a las limitaciones del sistema operativo.',
    }, {
      name: 'Cuando uso los comandos, Zira no envía mensajes, ¿qué hago?',
      value: 'Asegúrate de que Zira tiene el permiso `Insertar enlaces` y `Enviar Mensajes` en el canal donde estás probando los comandos.',
    }, {
      name: 'Zira dice "No se pudo encontrar ningún mensaje con ese ID" o "ID de Mensaje Desconocido", ¿qué hago?',
      value: 'Asegúrate de que el ID del mensaje está en el canal que estableciste y que Zira puede leer el canal',
    }, {
      name: 'Zira no da roles a pesar de que ya establecí todo apropiadamente.',
      value: 'Asegúrate de que Zira tiene el permiso "Administrar Roles" y que el rol de Zira está arriba de todos los roles que estableciste.',
    }, {
      name: '¿Zira puede remover emojis sin un rol establecido en los mensajes?',
      value: 'Sí, pero debes darle a Zira el permiso "Administrar Mensajes" en el canal que estableciste.',
    }, {
      name: '¿Se puede usar más de un mensaje con Zira?',
      value: 'Sí, solo establece otro mensaje y añade roles a ese mensaje.',
    }, {
      name: '¿Se puede usar más de un canal con Zira?',
      value: 'Sí, solo establece otro canal, luego un mensaje, etc.',
    }, {
      name: '¿Cuántos roles pueden haber en un mensaje?',
      value: 'Ya que Discord solo permite tener 20 emojis por mensaje, solo se permiten 20 roles por mensaje.',
    }],
  },
  join: {
    title: 'Comando Join',
    help: ['join channel** ~~-~~ establece el canal al que se enviarán los mensajes\n**', 'join message** ~~-~~ establece el mensaje que será enviado cuando un usuario se una\n\nPuedes usar estas variables en el mensajes:\n$user ~~-~~ nombre de usuario\n$mention ~~-~~ mención al usuario\n$guild ~~-~~ nombre del servidor\n$membercount ~~-~~ cantidad de miembros actuales'],
    channel: ['join channel #canal** ~~-~~ establece el canal para los mensajes enviados cuando un usuario se una\n\nPara dejar de enviar mensajes al canal establecido, usa **', 'join channel stop**'],
    stop: 'Ya no se enviarán mensajes cuando un usuario se una.',
    setChannel: ['Canal establecido a <#', '>\n\n**NOTA:** si Zira no puede enviar mensajes al canal, los mensajes cuando un usuario se una serán deshabilitados.'],
    message: 'join message [mensaje]** ~~-~~ establece el mensaje que será enviado cuando un usuario se una\n\nPuedes usar estas variables en el mensaje:\n$user ~~-~~ nombre de usuario\n$mention ~~-~~ mención al usuario\n$guild ~~-~~ nombre del servidor\n$membercount ~~-~~ cantidad de miembros actuales',
    setMessage: 'Mensaje cuando un usuario se una establecido a:\n',
  },
  leave: {
    title: 'Comando Leave',
    help: ['leave channel** ~~-~~ establece el canal al que se enviarán los mensajes\n**', 'leave message** ~~-~~ establece el mensaje que será enviado cuando un usuario se vaya\n\nPuedes usar estas variables en el mensaje:\n$user ~~-~~ nombre de usuario\n$mention ~~-~~ mención al usuario\n$guild ~~-~~ nombre del servidor\n$membercount ~~-~~ cantidad de miembros actuales'],
    channel: ['leave channel #canal** ~~-~~ establece el canal al que se enviarán los mensajes cuando un usuario se vaya\n\nPara dejar de enviar mensajes al canal establecido, usa **', 'leave channel stop**'],
    stop: 'Ya no se enviarán mensajes cuando un usuario se vaya.',
    setChannel: ['Canal establecido a <#', '>\n\n**NOTA:** si Zira no puede enviar mensajes al canal, los mensajes cuando un usuario se vaya serán deshabilitados.'],
    message: 'leave message [mensaje]** ~~-~~ establece el mensaje que será enviado cuando un usuario se vaya\n\nPuedes usar estas variables en el mensaje:\n$user ~~-~~ nombre de usuario\n$mention ~~-~~ mención al usuario\n$guild ~~-~~ nombre del servidor\n$membercount ~~-~~ cantidad de miembros actuales',
    setMessage: 'Mensaje cuando un usuario se vaya establecido a:\n',
  },
  auto: {
    title: 'Rol Automático',
    help: ['autorole show** ~~-~~ muestra los roles establecidos actualmente\n**', 'autorole user** ~~-~~ añade o remueve roles que deberían ser dados a un usuario al unirse\n**', 'autorole bot** ~~-~~ añade o remueve roles que deberían ser dados a un bot al unirse'],
    user: 'autorole user [@rol | nombre del rol]** ~~-~~ añade o remueve roles que deberían ser dados cuando un usuario se una\n\nPara remover un rol que ha sido establecido usa el comando de arriba.',
    userAdd: ['Rol <@&', '> añadido, será dado cuando un usuario se una.\n\n**NOTA:** El rol `Zira` tiene que estar arriba del rol que estableciste y tiene que tener el permiso `Administrar Roles` para dar este rol.'],
    userRemove: ['Rol <@&', '> removido, ya no será dado cuando un usuario se una.'],
    botAdd: ['Rol <@&', '> añadido, será dado cuando un bot sea invitado.\n\n**NOTA:** El rol `Zira` tiene que estar arriba del rol que estableciste y tiene que tener el permiso `Administrar Roles` para dar este rol.'],
    botRemove: ['Rol <@&', '> removido, ya no será dado cuando un bot sea invitado.'],
    bot: 'autorole bot [@rol | nombre del rol]** ~~-~~ añade o remueve roles que deberían ser dados cuando un bot sea invitado\n\nPara remover un rol que ha sido establecido usa el comando de arriba.',
    showUser: 'Roles de usuarios',
    showBot: 'Roles de bots',
    no: 'No hay roles establecidos.',
  },
  reset: {
    title: 'Restablecer ajustes :warning:',
    question: '¿seguro que quieres restablecer los ajustes del servidor?\n**TODO** lo que haya sido configurado será restablecido.\n\nResponde con `yes` para confirmar o `no` para cancelar',
    yes: 'Los ajustes del servidor han sido restablecidos.',
    no: 'Nada se restableció.',
    perm: 'Solo el dueño del servidor puede restablecer los ajustes.',
  },
  list: {
    title: ' Lista de roles',
    cont: 'List Continued',
    null: 'Si un ID de mensaje es null restablece tus ajustes y vuelve a añadir los roles o únete al [servidor de ayuda](https://zira.pw/support).',
    noTitle: 'OwO',
    noDesc: 'What\'s this?',
  },
  remove: {
    help: ['remove [[ID del mensaje](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [@rol | nombre del rol]** ~~-~~ remueve un rol que ha sido establecido por Zira\n\nPara conseguir el ID de mensaje en el que está un rol usa **', 'list**.'],
    setup: 'No se pudo remover el rol ya que no fue establecido por Zira o no está en el mensaje especificado.',
    removed: ['Rol <@&', '> removido junto al emoji '],
  },
  edit: {
    help: 'edit [[ID del mensaje](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [nuevo mensaje]** ~~-~~ edita un mensaje enviado por Zira',
    read: ['No se pudo conseguir el mensaje en <#', '> porque no poseo el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    unknownGet: 'No se pudo conseguir ese mensaje en <#',
    unknownEdit: 'No se pudo editar el mensaje.',
    no: 'Ese mensaje no se pudo editar por Zira ya que no fue enviado por ella.',
    edited: 'El mensaje fue editado.',
  },
  suggestion: {
    help: ['suggestion #canal** ~~-~~ establece el canal en el cual se enviarán las sugerencias\nSi quieres que las sugerencias solo se puedan enviar en un canal usa **', 'suggestion [#canal de sugerencias] [#canal para enviar las sugerencias]**\n\nPara desactivar las sugerencias, usa **', 'suggestion stop**'],
    set: ['Canal de sugerencias establecido a <#', '>\n\n**NOTA:** Si Zira no puede enviar mensajes al canal, las sugerencias serán deshabilitadas.'],
    setsubmit: ['Canal de sugerencias establecido a <#', '> y las sugerencias solo pueden ser enviadas en <#', '>\n\n**NOTA:** Si Zira no puede mandar mensajes al canal, las sugerencias serán deshabilitadas.'],
    stop: 'Las sugerencias fueron deshabilitadas.',
    disable: 'Las sugerencias están deshabilitadas.',
    notSetup: 'Ese mensaje no es una sugerencia enviada por Zira.',
    reason: 'Razón',
    useChannel: ['Usa el canal <#', '> para enviar una sugerencia.'],
    noReason: 'No se proporcionó una razón.',
  },
  submit: {
    help: 'submit [sugerencia]** ~~-~~ envía tu maravillosa sugerencia',
    title: 'Nueva sugerencia',
  },
  approve: {
    help: 'approve [[ID del mensaje](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [razón]** ~~-~~ aprueba una sugerencia',
    read: ['No pude aprobar una sugerencia en <#', '> porque no poseo el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    title: 'Sugerencia aprobada',
    reason: 'Razón',
    unknown: 'No se pudo aprobar la sugerencia.',
  },
  deny: {
    help: 'deny [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ deny a suggestion',
    read: ['No pude denegar una sugerencia en <#', '> porque no poseo el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    title: 'Sugerencia denegada',
    unknown: 'No se pudo denegar la sugerencia.',
  },
  maybe: {
    help: 'maybe [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ potentially approve a suggestion',
    read: ['No pude aprobar potencialmente una sugerencia en <#', '> porque no poseo el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    title: 'Sugerencia potencial',
    unknown: 'No se pudo aprobar potencialmente la sugerencia.',
  },
  once: {
    help: 'once [emoji] [@rol | nombre del rol]** ~~-~~ añada un rol con un emoji que solo puede ser reclamado una vez en el mensaje establecido\n\nEsto es útil para aceptar reglas del servidor, entre otras cosas.',
    cannotRead: ['No pude reaccionar al mensaje en <#', '> porque no poseo el permiso `Leer Mensajes` o `Leer el historial de mensajes`.'],
    cannotReact: ['No pude reaccionar al mensaje en <#', '> porque no poseo el permiso `Añadir Reacciones`.'],
    unknown: 'No pude reaccionar al mensaje en <#',
    set: ['Rol <@&', '> añadido con el emoji ', '\n\n**NOTA:** El rol `Zira` tiene que estar arriba del rol que estableciste y tiene que tener el permiso `Administrar Roles` para dar este rol.'],
    emoji: 'Ese emoji ya está en uso en este mensaje.',
    role: 'Ese rol ya está en uso en este mensaje.',
  },
  purge: {
    amount: 'No introdujiste una cantidad de mensajes.',
    wrongAmount: 'La cantidad de mensajes solo puede ser entre 2 y 100.',
    error: 'No pude borrar los mensajes.',
  },
};
