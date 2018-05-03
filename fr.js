'use strict';

module.exports = {
  title: 'Utilisation des commandes',
  titleError: 'Erreur :warning:',
  titleComp: 'Succès :white_check_mark:',
  unknownChannel: 'Salon introuvable.',
  unknownRole: 'Rôle introuvable.',
  unknownMessage: 'Message introuvable.',
  unknownEmoji: 'Emoji inconnu.',
  noChannel: ['Tout d\'abord veuillez configurer un salon en utilisant **', 'channel**.'],
  noMessage: ['Veuillez définir un message à utiliser en utilisant **', 'message**.'],
  help: {
    commandsTitle: 'Commandes',
    commands: {
      channel: 'salon où sera posté le message\n',
      message: 'définit le message que vous voulez utiliser\n',
      add: 'ajout d\'un rôle à l\'aide d\'une réaction/émoji\n',
      toggle: 'ajout d\'un rôle à bascule\n',
      remove: 'suppression d\'un rôle configuré\n',
      edit: 'modification d\'un message envoyé par Zira\n',
      list: 'liste des rôles utilisés\n',
      autorole: 'donne un rôle aux utilisateurs et aux bots à l\'arrivée\n',
      log: 'log quand Zira donne ou retire un rôle\n',
      join: 'envoye un message de bienvenue\n',
      leave: 'envoye un message d\'aurevoir\n',
      lang: 'sélection de la langue\n',
      reset: 'réinitialisation de la configuration\n',
      info: 'informations à propos de Zira\n',
      faq: 'foire aux questions\n',
      ping: 'temps de réponse de Zira\n',
      invite: 'lien d\'invitation Zira\n',
      suggestion: 'définit le salon où poster les suggestions\n',
      submit: 'proposer une suggestion\n',
      approve: 'approbation d\'une suggestion\n',
      maybe: 'approbation en suggestion potentielle(peut-être)\n',
      deny: 'refus d\'une suggestion\n',
      once: 'ajout d\'un rôle ne pouvant être ajouté qu\'une seule fois\n',
      calc: 'calculatrice\n',
      purge: 'supprimer jusqu\'à 100 messages\n',
    },
    categories: {
      role: 'Rôles',
      logs: 'Logs',
      suggestion: 'Suggestions',
      misc: 'Divers',
    },
    linksTitle: 'Liens',
    links: '[Guide de configuration](https://demo.zira.pw)\n[Serveur Discord d\'Aide](https://zira.pw/support)\n[Tableau de Bord](https://zira.pw)\n[Donation](https://www.patreon.com/HazedSPaCEx)\n[Traduire Zira](https://github.com/HazedSPaCEx/Zira-Translations)',
    news: 'Nouveautés',
  },
  channel: {
    help: 'channel #channel** ~~-~~ définit le salon qui va être utilisé',
    set: 'Le salon configuré est <#',
  },
  message: {
    help: 'message [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) | message]** ~~-~~ utilisation d\'un message existant ou création d\'un nouveau message',
    cannotSend: ['Impossible d\'envoyer le message dans <#', '> car il me manque la permission `Envoyer des messages`.'],
    cannotRead: ['Impossible d\'envoyer le message dans <#', '> car il me manque la permission `Lire les messages` ou `Voir les anciens messages`.'],
    unknown: 'Impossible d\'envoyer le message.',
    cannotReadID: ['Impossible de lire le message dans <#', '> car il me manque la permission `Lire les messages` ou `Voir les anciens messages`.'],
    unknownID: 'Impossible de configurer l\'ID du message.',
    set: 'Message configuré avec l\'ID ',
  },
  add: {
    help: 'add [emoji] [@role | nom du rôle]** ~~-~~ ajout d\'un rôle avec un émoji sur le message configuré',
    cannotRead: ['Impossible de réagir sur le message dans <#', '> car il me manque la permission `Lire les messages` ou `Voir les anciens messages`.'],
    cannotReact: ['Impossible de réagir sur le message dans <#', '> car il me manque la permission `Ajouter des réactions`.'],
    unknown: 'Impossible de réagir sur le message dans <#',
    set: ['<@&', '> a été ajouté avec l\'émoji ', '\n\n**NOTE:** Le rôle `Zira` doit être au-dessus du rôle que vous avez configuré et doit posséder la permission `Gérer les rôles` pour que je puisse donner le rôle.'],
    emoji: 'Cet émoji est déjà utilisé sur ce message.',
    role: 'Ce rôle est déjà utilisé sur ce message.',
  },
  toggle: {
    help: 'toggle [emoji] [@role | nom du rôle]** ~~-~~ ajouter un rôle à un émoji sur le message configuré',
    image: 'https://stuff.zira.pw/files/1524932965273.gif', /* I will replace this with a gif that is fast as my internet and laptop is slow */
  },
  perm: {
    noPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer les rôles` pour utiliser ces commandes.',
    noLangPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer le Serveur` pour modifier la langue du bot.',
    noGuildPerm: 'Vous devez être le propriétaire du serveur ou devez posséder la permission `Gérer le serveur` pour utiliser cette commande.',
    noMessagePerm: 'Vous devez être le propriétaire du serveur ou devez posséder la permission `Gérer les messages` pour supprimer des messages.',
  },
  lang: {
    langUpdate: 'La langue a été mise à jour.',
    translate: 'Si vous souhaitez avoir Zira dans un langage qui n\'est pas présent dans la liste ci-dessus,\nvous pouvez aider à traduire Zira [ici](https://github.com/HazedSPaCEx/Zira-Translations)',
  },
  log: {
    title: 'Commandes des Logs',
    help: ['log #salon** ~~-~~ enregistrement des logs dans le salon définit\n\nPour arrêter l\'enregistrement des logs rentrez la commande **', 'log stop**\n\nUn example d\'un message est ci-dessous'],
    set: ['Le salon des Logs a été définit à <#', '>\n\n**NOTE:** Si Zira n\'a pas la permission de parler dans ce salon alors l\'enregistrement des logs sera désactivé.'],
    stop: 'Désormais les messages des Logs ne seront messages plus envoyés.',
    image: 'https://stuff.zira.pw/files/logExample.png',
    give: [' a réagit à ', ' pour obtenir '],
    remove: [' a réagit à ', ' pour supprimer '],
  },
  faq: {
    title: 'Foire Aux Questions',
    fields: [{
      name: 'How do I get a message ID?',
      value: 'On PC, make sure developer mode is enabled on User Settings --> Appearance. Once it\'s enabled, go to the three dots on the right side of the message that you want the ID for, then click Copy ID in the drop-down menu.\n\nOn Android, ensure that developer mode is enabled on User Settings --> Behavior. Then, press and hold down on the message you want the ID for. From there, scroll down (if you have to) to find the Copy ID button. Click on it, and it will be copied to your clipboard.\n\niOS will never have this feature due to limitations of the OS preventing this from being a feature.',
    }, {
      name: 'Lorsque je rentre une commande Zira ne répond pas',
      value: 'Veuillez vérifier que Zira a les permissions `Intégrer des liens` et `Envoyer des messages` dans le salon où vous rentrez les commandes.',
    }, {
      name: 'Zira vous dit "Impossible de trouver le message correspondant à cet ID" ou que l\'ID du message est inconnu" que faire?',
      value: 'Veuillez vérifier que l\'ID du message se trouve bien dans le salon que vous avez configuré et que Zira possède la permission de voir ce salon.',
    }, {
      name: 'Zira ne donne pas les rôles alors que vous avez tout configuré?',
      value: 'Veuillez vérifier que Zira a la permission `Gérer les rôles` et que le rôle de Zira est placé au-dessus des rôles configurés que Zira doit donner.',
    }, {
      name: 'Est-ce que Zira peut retirer les émojis/réactions n\'étant associés à aucun rôle que Zira doit donner?',
      value: 'Oui, il vous suffit de donner la permission `Gérer les messages` à Zira dans le salon.',
    }, {
      name: 'Zira peut-il gérer plus d\'un message à la fois?',
      value: 'Oui, il vous suffit de configurer un autre message et d\'ajouter les rôles sur celui-ci.',
    }, {
      name: 'Zira peut-il gérer plus d\'un salon à la fois?',
      value: 'Oui, il vous suffit de configurer un autre salon, puis le message, etc.',
    }, {
      name: 'Combien de rôles peut contenir un message?',
      value: 'Discord limite à 20 émojis/réactions à la fois par message, donc 20 rôles au maximum.',
    }],
  },
  join: {
    title: 'Commande de Bienvenue',
    help: ['join channel** ~~-~~ définit le salon où seront posté les messages de bienvenue\n**', 'join message** ~~-~~ message qui sera envoyé dans le salon lorsqu\'un utilisateur rejoint\n\nVous pouvez utiliser ces arguments dans le message :\n$user ~~-~~ pseudonyme\n$mention ~~-~~ mentionne l\'utilisateur\n$guild ~~-~~ nom du serveur\n$membercount ~~-~~ affiche le nombre de personnes sur le serveur'],
    channel: ['join channel #channel** ~~-~~ définit le salon dans lequel seront envoyé les messages de bienvenue\n\nPour arrêter les messages de bienvenue faites la commande : **', 'join channel stop**'],
    stop: 'Les messages de bienvenue ne seront plus envoyées.',
    setChannel: ['Salon de bienvenue définit à  <#', '>\n\n**NOTE:** Si Zira n\'a pas la permission `Envoyer des messages` dans le salon configuré alors cette option sera désactivée.'],
    message: 'join message [message]** ~~-~~ configure le message qui sera envoyé lorsqu\'un utilisateur rejoint\n\nVous pouvez utiliser ces arguments dans le message :\n$user ~~-~~ pseudonyme\n$mention ~~-~~ mentionne l\'utilisateur\n$guild ~~-~~ nom du serveur\n$membercount ~~-~~ affiche le nombre de personnes sur le serveur',
    setMessage: 'Le message de bienvenue est le suivant:\n',
  },
  leave: {
    title: 'Commande de Bienvenue',
    help: ['leave channel** ~~-~~ définit le salon où seront posté les messages d\'aurevoir\n**', 'leave message** ~~-~~ message qui sera envoyé dans le salon lorsqu\'un utilisateur quitte\n\nVous pouvez utiliser ces arguments dans le message :\n$user ~~-~~ pseudonyme\n$mention ~~-~~ mentionne l\'utilisateur\n$guild ~~-~~ nom du serveur\n$membercount ~~-~~ affiche le nombre de personnes sur le serveur'],
    channel: ['leave channel #channel** ~~-~~ définit le salon dans lequel seront envoyé les messages d\'aurevoir\n\nPour arrêter les messages d\'aurevoir faites la commande **', 'leave channel stop**'],
    stop: 'Les messages d\'aurevoir ne seront plus envoyées.',
    setChannel: ['Salon d\'aurevoir définit à <#', '>\n\n**NOTE:** Si Zira n\'a pas la permission `Envoyer des messages` dans le salon configuré alors cette option sera désactivée.'],
    message: 'leave message [message]** ~~-~~ configure le message qui sera envoyé lorsqu\'un utilisateur quitte\n\nVous pouvez utiliser ces arguments dans le message :\n$user ~~-~~ pseudonyme\n$mention ~~-~~ mentionne l\'utilisateur\n$guild ~~-~~ nom du serveur\n$membercount ~~-~~ affiche le nombre de personnes sur le serveur',
    setMessage: 'Le message d\'aurevoir est le suivant:\n',
  },
  auto: {
    title: 'Rôle automatique',
    help: ['autorole show** ~~-~~ affiche les rôles actuellement configurés\n**', 'autorole user** ~~-~~ ajout ou suppression des rôles qui doivent être donné à l\'utilisateur à l\'entrée sur le serveur\n**', 'autorole bot** ~~-~~ ajout ou suppression des rôles qui doivent être donné à un BOT à l\'entrée sur le serveur'],
    user: 'autorole user [@role | nom du rôle]** ~~-~~ ajoute ou supprime un rôle qui doit être donné lorsqu\'un utilisateur rejoint\n\nPour supprimer un rôle configuré faites la commande ci-dessus.',
    userAdd: ['Ajout du rôle <@&', '> qui sera donné lorsqu\'un utilisateur rejoint.\n\n**NOTE:** Le rôle`Zira` doit se trouver au-dessus du rôle configuré et requiert la permission `Gérer les rôles` pour pouvoir donner ce rôle.'],
    userRemove: ['Suppression du rôle <@&', '> qui ne sera plus donné lorsqu\'un utilisateur rejoint.'],
    botAdd: ['Ajout du rôle  <@&', '> qui sera donné lorsqu\'un BOT rejoint.\n\n**NOTE:** Le rôle`Zira` doit se trouver au-dessus du rôle configuré et requiert la permission `Gérer les rôles` pour pouvoir donner ce rôle.'],
    botRemove: ['Suppression du rôle<@&', '> qui ne sera plus donné lorsqu\'un BOT rejoint.'],
    bot: 'autorole bot [@role | nom du rôle]** ~~-~~ ajoute ou supprime un rôle qui doit être donné lorsqu\'un BOT rejoint\n\nPour supprimer un rôle configuré faites la commande ci-dessus.',
    showUser: 'Rôles donnés à l\'utilisateur',
    showBot: 'Roles donnés à un BOT',
    no: 'Aucun rôle n\'est configuré.',
  },
  reset: {
    title: 'Réinitialisation de la configuration :warning:',
    question: 'Êtes vous sûr de vouloir réinitialiser la configuration du serveur ?\n**TOUTE** la configuration enregistrée sera réinitialisée.\n\n**écrivez** *yes* **ou** *no*',
    yes: 'La configuration a été réinitialisée.',
    no: 'La configuration n\'a pas été réinitialisée.',
    perm: 'Uniquement le propriétaire du serveur peut réinitialiser la configuration.',
  },
  list: {
    title: ' Liste des rôles',
    cont: 'Suite de la liste',
    null: 'Si un ID de message est "null" alors vous devez soit réinitialiser votre configuration et réajouter les rôles soit rejoindre le [serveur d\'aide](https://zira.pw/support).',
    noTitle: 'OwO',
    noDesc: 'Qu\'est-ce?',
  },
  remove: {
    help: ['remove [ID du message](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [@role | nom du rôle]** ~~-~~ supprime un rôle qui a été configuré avec Zira\n\nPour obtenir l\'ID du message d\'un rôle que vous voullez supprimer faites la commande : **', 'list**.'],
    setup: 'Impossible de supprimer le rôle car ce rôle soit n\'a pas été configuré avec Zira ou soit parcequ\'il n\'est pas configuré sur ce message spécifiquement.',
    removed: ['<@&', '> a été retiré de l\'émoji '],
  },
  edit: {
    help: 'edit [[ID du message](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [nouveau message]** ~~-~~ modifier un message envoyé par Zira',
    read: ['Impossible de trouver le message dans <#', '> car je n\'ai pas la permission `Lire les messages` ou `Voir les anciens messages`.'],
    unknownGet: 'Impossible de trouver ce message dans <#',
    unknownEdit: 'Impossible de modifier ce message.',
    no: 'Ce message ne peut pas être édité par Zira car il n\'a pas été envoyé par Zira.',
    edited: 'Le message a été édité.',
  },
  suggestion: {
    help: ['suggestion #channel** ~~-~~ définit le salon dans lequel les suggestions seront postées\nSi vous voulez que les suggestions ne soient envoyées uniquement à travers **un salon** alors faites la commande **', 'suggestion [#salon de réception des suggestions] [#salon d\'envoi des suggestions]**\n\nPour désactiver les suggestions faites la commande **', 'suggestion stop**'],
    set: ['Salon des suggestions définit à <#', '>\n\n**NOTE:** Si Zira n\'a pas la permission `Envoyer des messages` alors les suggestions seront désactivées.'],
    setsubmit: ['Salon des suggestions définit à <#', '> et les suggestions ne pourront seulement être envoyées dans <#', '>\n\n**NOTE:** Si Zira n\'a pas la permission `Envoyer des messages` alors les suggestions seront désactivées.'],
    stop: 'Les suggestions sont désormais désactivées.',
    disable: 'Les suggestions sont désactivées.',
    notSetup: 'Ce message n\'est pas une suggestion envoyée par Zira.',
    reason: 'Raison',
    useChannel: ['Utilisez le salon <#', '> pour proposer une suggestion.'],
    noReason: 'Aucune raison n\'a été fournit.',
  },
  submit: {
    help: 'submit [suggestion]** ~~-~~ proposer votre magnifique suggestion',
    title: 'Nouvelle Suggestion',
  },
  approve: {
    help: 'approve [[ID du message](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [raison]** ~~-~~ approbation d\'une suggestion',
    read: ['Impossible d\'approuver cette suggestion dans <#', '> car je n\'ai pas la permission `Lire les messages` ou `Voir les anciens messages`.'],
    title: 'Suggestion approuvée',
    reason: 'Raison',
    unknown: 'Impossible d\'approver la suggestion.',
  },
  deny: {
    help: 'deny [[ID du message](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [raison]** ~~-~~ refuser une suggestion',
    read: ['Impossible de refuser la suggestion dans <#', '> car je n\'ai pas la permission `Lire les messages` ou `Voir les anciens messages`.'],
    title: 'Suggestion refusée',
    unknown: 'Impossible de refuser la suggestion.',
  },
  maybe: {
    help: 'maybe [[ID du message](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [raison]** ~~-~~ approbation potentielle d\'une suggestion',
    read: ['Impossible d\'approuver potentiellement la suggestion dans <#', '> car je n\'ai pas la permission `Lire les messages` ou `Voir les anciens messages`.'],
    title: 'Potentielle Suggestion',
    unknown: 'Impossible d\'approuver potentiellement la suggestion.',
  },
  once: {
    help: 'once [emoji] [@role | nom du rôle]** ~~-~~ ajoute un rôle avec un emoji qui ne peut être donné qu\'une seule fois sur le message configuré\n\nC\'est utile pour l\'acceptation des règles du serveur, etc.',
    cannotRead: ['Impossible de réagir sur le message dans <#', '> car je n\'ai pas la permission `Lire les messages` ou `Voir les anciens messages`.'],
    cannotReact: ['Impossible de réagir sur le message dans <#', '> car je n\'ai pas la permission `Ajouter des réactions`.'],
    unknown: 'Impossible de réagir sur le message dans <#',
    set: ['<@&', '> a été ajouté avec l\'émoji ', '\n\n**NOTE:** Le rôle `Zira` doit se situer au-dessus du rôle configuré et doit posséder la permission `Gérer les rôlesRoles` pour pouvoir donner ce rôle.'],
    emoji: 'Cet émoji est déjà utilisé sur ce message.',
    role: 'Ce rôle est déjà utilisé sur ce message.',
  },
  purge: {
    amount: 'Vous n\'avez pas spécifié un nombre de messages.',
    wrongAmount: 'Le nombre de messages ne peut qu\'être entre 1 et 100.',
    error: 'Je n\'ai pas pu supprimer les messages.',
  },
};
