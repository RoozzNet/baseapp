import { LangType } from '../../translations';
import { nationalitiesNames } from '../../translations/nationalities';

export const ru: LangType = {
    'page.header.navbar.signIn': 'Войти',
    'page.header.navbar.trade': 'Биржа',
    'page.header.navbar.wallets': 'Кошельки',
    'page.header.navbar.openOrders': 'Ордера',
    'page.header.navbar.history': 'История',

    'page.header.navbar.profile': 'Профиль',
    'page.header.navbar.logout': 'Выйти',

    'page.sidebar.group.text': 'Fee Group:',
    'page.sidebar.group.value': 'Base',

    'page.body.trade.header.markets': 'Рынки',
    'page.body.trade.header.markets.content.pair': 'Пара',
    'page.body.trade.header.markets.content.price': 'Цена',
    'page.body.trade.header.markets.content.change': 'Изменение 24ч',
    'page.body.trade.header.markets.content.market': 'Пара',
    'page.body.trade.header.markets.content.last_price': 'Последняя цена',
    'page.body.trade.header.markets.content.search': 'Поиск',
    'page.body.trade.header.markets.content.volume': 'Объем',

    'page.body.trade.header.newOrder': 'Создание ордера',
    'page.body.trade.header.newOrder.content.tabs.buy': 'Купить',
    'page.body.trade.header.newOrder.content.tabs.sell': 'Продать',
    'page.body.trade.header.newOrder.content.orderType': 'Тип ордера',
    'page.body.trade.header.newOrder.content.orderType.limit': 'Лимит',
    'page.body.trade.header.newOrder.content.orderType.market': 'Рынок',
    'page.body.trade.header.newOrder.content.price': 'Цена',
    'page.body.trade.header.newOrder.content.amount': 'Кол.',
    'page.body.trade.header.newOrder.content.total': 'Всего',
    'page.body.trade.header.newOrder.content.available': 'Доступно',

    'error.order.create.minAmount': 'Кол-во слишком мало. Минимальное кол-во: {amount} {currency}',
    'error.order.create.minPrice': 'Цена слишком мала. Минимальная цена: {price} {currency}',
    'error.order.create.maxPrice': 'Цена слишком велика. Максимальная цена: {price} {currency}',
    'error.order.create.available': 'Баланс превышен. Доступно {available} {currency}',

    'page.body.trade.header.marketDepths': 'Глубина рынка',
    'page.body.trade.header.marketDepths.content.price': 'Цена:',
    'page.body.trade.header.marketDepths.content.volume': 'Объем:',
    'page.body.trade.header.marketDepths.content.cumulativeVolume': 'Общий объем:',
    'page.body.trade.header.marketDepths.content.cumulativeValue': 'Общее значение:',

    'page.body.trade.toolBar.lowest': 'Низший 24h',
    'page.body.trade.toolBar.lastPrice': 'Последняя цена',
    'page.body.trade.toolBar.selectMarket': 'Выберите рынок',
    'page.body.trade.toolBar.highest': 'Наибольший 24h',
    'page.body.trade.toolBar.volume': '24h Объем',
    'page.body.trade.toolBar.change': 'Изменение',

    'page.body.trade.header.asks': 'Заявки на продажу',
    'page.body.trade.header.bids': 'Заявки на покупку',
    'page.body.trade.orderbook': 'Книга ордеров',
    'page.body.trade.orderbook.lastMarket': 'Последняя рыночная цена',
    'page.body.trade.orderbook.header.price': 'Цена',
    'page.body.trade.orderbook.header.amount': 'Кол.',
    'page.body.trade.orderbook.header.volume': 'Объем',

    'page.body.trade.header.recentTrades': 'История торгов рынка',
    'page.body.trade.header.recentTrades.content.time': 'Время',
    'page.body.trade.header.recentTrades.content.price': 'Цена',
    'page.body.trade.header.recentTrades.content.amount': 'Кол.',
    'page.body.trade.header.market': 'Рыночные сделки',
    'page.body.trade.header.yours': 'Ваши сделки',

    'page.body.trade.header.openOrders': 'Активные ордера',
    'page.body.trade.header.openOrders.content.date': 'Дата',
    'page.body.trade.header.openOrders.content.state': 'Состояние',
    'page.body.trade.header.openOrders.content.price': 'Цена',
    'page.body.trade.header.openOrders.content.amount': 'Кол.',
    'page.body.trade.header.openOrders.content.total': 'Всего',
    'page.body.trade.header.openOrders.content.filled': 'Заполненный',

    'page.body.wallets.estimated_value': 'Оценочная стоимость',

    'page.body.wallets.locked': 'В ордерах',
    'page.body.wallets.balance': 'Баланс',
    'page.body.wallets.tabs.deposit': 'Пополнить',
    'page.body.wallets.tabs.deposit.ccy.message.submit': 'Пожалуйста, внесите депозитный платеж. Ваш депозит будет доступен после 6 подтверждений',
    'page.body.wallets.tabs.deposit.ccy.message.address': 'Пополнить кошелек',
    'page.body.wallets.tabs.deposit.ccy.message.button': 'Копировать',
    'page.body.wallets.tabs.deposit.ccy.message.success': 'Адрес скопирован',

    'page.body.wallets.tabs.deposit.ccy.message.error': 'Генерация адреса',

    'page.body.wallets.tabs.deposit.fiat.message1': 'Вы можете внести депозит в банке, используя следующие реквизиты',
    'page.body.wallets.tabs.deposit.fiat.message2': 'Пожалуйста, используйте предоставленную информацию для завершения банковского платежа. Ваш депозит станет доступным на протяжении 2-х рабочих дней.',
    'page.body.wallets.tabs.deposit.fiat.bankName': 'Название банка',
    'page.body.wallets.tabs.deposit.fiat.accountNumber': 'Номер счета',
    'page.body.wallets.tabs.deposit.fiat.accountName': 'Имя счета',
    'page.body.wallets.tabs.deposit.fiat.phoneNumber': 'Номер телефона',
    'page.body.wallets.tabs.deposit.fiat.referenceCode': 'Ваш уникальный код',
    'page.body.wallets.table.pending': 'Обрабатывается',
    'page.body.wallets.tabs.deposit.fiat.admin': 'Для того, чтобы вывести эту валюту, обратитесь к администратору!',

    'page.body.wallets.tabs.withdraw': 'Вывод',
    'page.body.wallets.tabs.withdraw.content.amount': 'Сумма вывода',
    'page.body.wallets.tabs.withdraw.content.code2fa': '6-ти значный GAuthenticator код',
    'page.body.wallets.tabs.withdraw.content.fee': 'Комиссия',
    'page.body.wallets.tabs.withdraw.content.total': 'Сумма вывода',
    'page.body.wallets.tabs.withdraw.content.button': 'ВЫВЕСТИ',

    'page.body.wallets.tabs.withdraw.modal.confirmation': 'Подтверждение',
    'page.body.wallets.tabs.withdraw.modal.message1': 'Вы получите ',
    'page.body.wallets.tabs.withdraw.modal.message2': ' на кошелек',
    'page.body.wallets.tabs.withdraw.modal.button.cancel': 'Отменить',
    'page.body.wallets.tabs.withdraw.modal.button.withdraw': 'Вывести',

    'page.body.wallets.tabs.withdraw.content.enable2fa': 'Вам нужно активировать 2FA, чтобы получить возможность выводить Ваши валюты!',
    'page.body.wallets.tabs.withdraw.content.enable2faButton': 'Активировать 2FA',

    'success.beneficiaries.created': 'Beficiaries: successfully created',
    'success.beneficiaries.activated': 'Beficiaries: successfully activated',
    'success.beneficiaries.deleted': 'Beficiaries: successfully deleted',

    'page.body.wallets.beneficiaries.title': 'Withdraw address',
    'page.body.wallets.beneficiaries.fiat.title': 'Withdrawal details',
    'page.body.wallets.beneficiaries.dropdown.address': 'Address',
    'page.body.wallets.beneficiaries.dropdown.select': 'Select',

    'page.body.wallets.beneficiaries.dropdown.fiat.account': 'Account',
    'page.body.wallets.beneficiaries.dropdown.fiat.bankOfBeneficiary': 'Bank of Beneficiary',
    'page.body.wallets.beneficiaries.dropdown.fiat.beneficiary': 'Beneficiary',
    'page.body.wallets.beneficiaries.dropdown.fiat.description': 'Description',
    'page.body.wallets.beneficiaries.dropdown.fiat.name': 'Name',
    'page.body.wallets.beneficiaries.dropdown.fiat.fullName': 'Full Name',

    'page.body.wallets.beneficiaries.addAddress': 'Add Address',
    'page.body.wallets.beneficiaries.addAddressModal.header': 'Add new withdrawal address',

    'page.body.wallets.beneficiaries.addAddressModal.body.coinAddress': 'Blockchain Address',
    'page.body.wallets.beneficiaries.addAddressModal.body.coinBeneficiaryName': 'Beneficiary Name',
    'page.body.wallets.beneficiaries.addAddressModal.body.coinDescription': 'Description (optional)',

    'page.body.wallets.beneficiaries.addAddressModal.body.fiatName': 'Description',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatFullName': 'Full Name',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatAccountNumber': 'Account Number',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatBankName': 'Bank Name',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatBankSwiftCode': 'Bank Swift Code (optional)',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatIntermediaryBankName': 'Intermediary Bank Name (optional)',
    'page.body.wallets.beneficiaries.addAddressModal.body.fiatIntermediaryBankSwiftCode': 'Intermediary Bank Swift Code (optional)',

    'page.body.wallets.beneficiaries.addAddressModal.body.button': 'submit for confirmation',

    'page.body.wallets.beneficiaries.confirmationModal.header': 'Confirm new address',
    'page.body.wallets.beneficiaries.confirmationModal.body.text': 'We have sent you an email containing a confirmation code pin, please enter it below to save the new address:',
    'page.body.wallets.beneficiaries.confirmationModal.body.confirmationModalCode': 'Pin code',
    'page.body.wallets.beneficiaries.confirmationModal.body.button': 'confirm',

    'page.body.wallets.beneficiaries.tipAddress': 'Address',
    'page.body.wallets.beneficiaries.tipName': 'Name',
    'page.body.wallets.beneficiaries.tipDescription': 'Note',

    'page.body.wallets.beneficiaries.failAddModal.header': 'Warning',
    'page.body.wallets.beneficiaries.failAddModal.content': 'You need to confirm your account to add a beneficiary',
    'page.body.wallets.beneficiaries.failAddModal.button': 'Confirm phone',

    'page.body.openOrders.tab.all': 'Все',
    'page.body.openOrders.tab.open': 'Открытые',
    'page.body.openOrders.header.orderType': 'Тип ордера',
    'page.body.openOrders.header.orderType.buy.market': 'Buy market',
    'page.body.openOrders.header.orderType.buy.limit': 'Buy limit',
    'page.body.openOrders.header.orderType.sell.market': 'Sell market',
    'page.body.openOrders.header.orderType.sell.limit': 'Sell limit',
    'page.body.openOrders.header.pair': 'Пара',
    'page.body.openOrders.header.amount': 'Кол.',
    'page.body.openOrders.header.price': 'Цена',
    'page.body.openOrders.header.executed': 'Заполнено',
    'page.body.openOrders.header.remaining': 'Осталось',
    'page.body.openOrders.header.costRemaining': 'Остаточная стоимость',
    'page.body.openOrders.header.status': 'Статус',
    'page.body.openOrders.content.status.done': 'Выполнен',
    'page.body.openOrders.content.status.wait': 'Открыт',
    'page.body.openOrders.content.status.cancel': 'Отменен',
    'page.body.openOrders.header.button.cancelAll': 'Отменить все',

    'page.body.history.deposit': 'История депозитов',
    'page.body.history.deposit.header.txid': 'txID',
    'page.body.history.deposit.header.date': 'Дата',
    'page.body.history.deposit.header.currency': 'Валюта',
    'page.body.history.deposit.header.amount': 'Количество',
    'page.body.history.deposit.header.status': 'Статус',
    'page.body.history.deposit.content.status.accepted': 'Принят',
    'page.body.history.deposit.content.status.collected': 'Обработан',
    'page.body.history.deposit.content.status.submitted': 'Отправлен',
    'page.body.history.deposit.content.status.canceled': 'Отменен',
    'page.body.history.deposit.content.status.rejected': 'Отвергнут',
    'page.body.history.deposit.content.status.skipped': 'Пропущен',

    'page.body.history.withdraw': 'История выводов',
    'page.body.history.withdraw.header.id': 'ID',
    'page.body.history.withdraw.header.date': 'Дата',
    'page.body.history.withdraw.header.currency': 'Валюта',
    'page.body.history.withdraw.header.address': 'Адрес',
    'page.body.history.withdraw.header.amount': 'Сумма',
    'page.body.history.withdraw.header.fee': 'Комиссия',
    'page.body.history.withdraw.header.status': 'Статус',
    'page.body.history.withdraw.content.status.prepared': 'Подготовлен',
    'page.body.history.withdraw.content.status.submitted': 'Отправлен',
    'page.body.history.withdraw.content.status.skipped': 'Принят',
    'page.body.history.withdraw.content.status.canceled': 'Отменен',
    'page.body.history.withdraw.content.status.accepted': 'Принят',
    'page.body.history.withdraw.content.status.suspected': 'Просматривается',
    'page.body.history.withdraw.content.status.rejected': 'Отвергнут',
    'page.body.history.withdraw.content.status.processing': 'Обрабатывается',
    'page.body.history.withdraw.content.status.succeed': 'Выполнен',
    'page.body.history.withdraw.content.status.failed': 'Неудачный',
    'page.body.history.withdraw.content.status.confirming': 'Подтверждается',

    'page.body.history.trade': 'История ордеров',
    'page.body.history.trade.header.id': 'ID',
    'page.body.history.trade.header.date': 'Дата',
    'page.body.history.trade.header.side': 'Тип',

    'page.body.history.trade.content.side.buy': 'Купля',
    'page.body.history.trade.content.side.sell': 'Продажа',

    'page.body.history.trade.header.market': 'Рынок',
    'page.body.history.trade.header.price': 'Цена',
    'page.body.history.trade.header.total': 'Всего',
    'page.body.history.trade.header.amount': 'Кол.',
    'page.body.history.trade.header.balance': 'Баланс',

    'page.body.profile.header.account': 'Профиль',

    'page.body.profile.header.account.content.password': 'Пароль',
    'page.body.profile.header.account.content.password.button.change': 'Изменить',
    'page.body.profile.header.account.content.password.old': 'Старый пароль',
    'page.body.profile.header.account.content.password.new': 'Новый пароль',
    'page.body.profile.header.account.content.password.button.save': 'Сохранить',
    'page.body.profile.header.account.content.password.button.cancel': 'Отменить',
    'page.body.profile.header.account.content.password.conf': 'Подтверждение пароля',
    'page.body.profile.header.account.content.password.dont.match': 'Пароли не совпадают',
    'page.body.profile.header.account.content.password.change.success': 'Успешно!',
    'page.body.profile.header.account.content.password.change': 'Смена пароля',

    'page.body.profile.header.account.content.twoFactorAuthentication': 'Двухфакторная аутентификация',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.enable': 'Включен',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.disable': 'Отключен',
    'page.body.profile.header.account.content.twoFactorAuthentication.header': 'Google Authenticator',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.1': 'Скачайте и установите приложение Google Authenticator с ',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.or': 'или ',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.2': 'Отсканируйте QR код или используйте код MFA:',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.3': '* Сохраните этот код в надежном месте. Он может быть использован для доступа 2FA кода с разных устройств.',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.mfa': 'MFA код',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.4': 'Введите 2FA код с приложения',
    'page.body.profile.header.account.content.twoFactorAuthentication.subHeader': '6-ти значный код GAuthenticator',
    'page.body.profile.header.account.content.twoFactorAuthentication.enable': 'ВКЛЮЧИТЬ',
    'page.body.profile.header.account.content.twoFactorAuthentication.disable': 'ОТКЛЮЧИТЬ 2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalBody': 'Пожалуйста, обратитесь с администратором, чтобы отключить 2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalHeader': 'Двухфакторная аутентификация включена',

    'page.body.profile.header.account.profile': 'Верификация Вашего профиля',
    'page.body.profile.header.account.profile.email.title': 'Почта - подтверждено',
    'page.body.profile.header.account.profile.email.message': 'Депозиты и вывод средств не разрешены',
    'page.body.profile.header.account.profile.phone.unverified.title': 'Телефон - подтвердить',
    'page.body.profile.header.account.profile.phone.title': 'Телефон - подтверждено',
    'page.body.profile.header.account.profile.phone.message': 'Депозиты и торги разрешены',
    'page.body.profile.header.account.profile.identity.unverified.title': 'Личность - подтвердить',
    'page.body.profile.header.account.profile.identity.title': 'Личность - подтверждено',
    'page.body.profile.header.account.profile.identity.message': 'Вывод средств разрешен',

    'page.body.profile.header.referralProgram': 'Реферальная программа',
    'page.body.profile.content.copyLink': 'Скопировать',

    'page.body.profile.apiKeys.header': 'Мои API ключи',
    'page.body.profile.apiKeys.header.create': 'Создать',

    'page.body.profile.apiKeys.noOtp': 'Пожалуйста, включите двухфакторную аутентификацию',
    'page.body.profile.apiKeys.show': 'Показать',
    'page.body.profile.apiKeys.noKeys': 'У Вас нет API ключей',

    'page.body.profile.apiKeys.modal.btn.show': 'Показать',
    'page.body.profile.apiKeys.modal.btn.create': 'Подтвердить',
    'page.body.profile.apiKeys.modal.btn.copy': 'Копировать',
    'page.body.profile.apiKeys.modal.btn.activate': 'Активировать',
    'page.body.profile.apiKeys.modal.btn.disabled': 'Откл.',
    'page.body.profile.apiKeys.modal.btn.delete': 'Удалить',
    'page.body.profile.apiKeys.modal.header': 'Двухфакторная аутентификация',
    'page.body.profile.apiKeys.modal.created_header': 'Создано',
    'page.body.profile.apiKeys.modal.access_key': 'Ключ доступа',
    'page.body.profile.apiKeys.modal.secret_key': 'Секретный ключ',
    'page.body.profile.apiKeys.modal.secret_key_info': 'Эта информация видна только один раз и не сможет быть восстановлена',
    'page.body.profile.apiKeys.modal.secret_key_store': 'Пожалуйста, сохраните это надежно',
    'page.body.profile.apiKeys.modal.note': 'Внимание',
    'page.body.profile.apiKeys.modal.note_content': `Для сохранности средств, не сообщайте свой Секретный и ключ Доступа другим.
    Если Вы забыли свой Секретный ключ, удалите его и создайте новую пару ключей.`,
    'page.body.profile.apiKeys.modal.title': 'Введите 2FA код с приложения',
    'page.body.profile.apiKeys.modal.label': '6-ти значный Google Authenticator код',
    'page.body.profile.apiKeys.modal.placeholder': 'Введите код',

    'page.body.profile.apiKeys.table.header.kid': 'Kid',
    'page.body.profile.apiKeys.table.header.algorithm': 'Алгоритм',
    'page.body.profile.apiKeys.table.header.state': 'Состояние',
    'page.body.profile.apiKeys.table.header.created': 'Создан',
    'page.body.profile.apiKeys.table.header.updated': 'Обновлен',

    'success.api_keys.fetched': 'API ключи получены',
    'success.api_keys.created': 'API ключ успешно создан',
    'success.api_keys.copied.access': 'Ключ Доступа скопирован',
    'success.api_keys.copied.secret': 'Секретный ключ скопирован',
    'success.api_keys.updated': 'API ключ успешно обновлен',
    'success.api_keys.deleted': 'API ключ успешно удален',

    'page.body.profile.header.accountActivity': 'Активность аккаунта',
    'page.body.profile.header.accountActivity.content.date': 'Дата',
    'page.body.profile.header.accountActivity.content.addressip': 'IP адрес',
    'page.body.profile.header.accountActivity.content.action': 'Действие',
    'page.body.profile.header.accountActivity.content.result': 'Результат',
    'page.body.profile.header.accountActivity.content.userAgent': 'Браузер',

    'page.body.profile.content.action.login': 'Вход в систему',
    'page.body.profile.content.action.logout': 'Выход',
    'page.body.profile.content.action.request2fa': 'Запрошен QR-код для 2FA',
    'page.body.profile.content.action.enable2fa': 'Активация 2FA',
    'page.body.profile.content.action.login.2fa': 'Вход в систему с 2FA',
    'page.body.profile.content.action.requestPasswordReset': 'Запрос на сброс пароля',
    'page.body.profile.content.action.passwordReset': 'Сброс пароля',

    'page.body.profile.content.result.succeed': 'Успешно',
    'page.body.profile.content.result.failed': 'Ошибка',
    'page.body.profile.content.result.denied': 'Отказано',

    'page.body.kyc.phone.head': 'Подтверждение телефона',
    'page.body.kyc.phone.enterPhone': 'Введите свой номер телефона',
    'page.body.kyc.phone.phoneNumber': 'Номер Телефона',
    'page.body.kyc.phone.enterCode': 'Введите код, который Вы получили',
    'page.body.kyc.phone.code': 'СМС',
    'page.body.kyc.phone.send': 'ОТПРАВИТЬ КОД',
    'page.body.kyc.phone.resend': 'ПЕРЕСЛАТЬ КОД',
    'page.body.kyc.identity.firstName': 'Имя',
    'page.body.kyc.identity.lastName': 'Фамилия',
    'page.body.kyc.identity.dateOfBirth': 'Дата рождения ДД/ММ/ГГГГ',
    'page.body.kyc.identity.residentialAddress': 'Место проживания',
    'page.body.kyc.identity.city': 'Город',
    'page.body.kyc.identity.postcode': 'Почтовый индекс',
    'page.body.kyc.identity.nationality': 'Национальность',
    'page.body.kyc.identity.CoR': 'Страна проживания',
    'page.body.kyc.documents.expiryDate': 'Действителен до DD/MM/YYYY',
    'page.body.kyc.documents.drag': 'Перетащите или загрузите файлы',
    'page.body.kyc.documents.maxFile': 'Максимальный размер 10MB',
    'page.body.kyc.documents.maxNum': 'Максимальное число 5',
    'page.body.kyc.documents.upload': 'Загрузите свое удостоверение личности с фотографией',
    'page.body.kyc.documents.number': ': Номер документа',
    'page.body.kyc.documentsType': 'Тип документа',

    'page.body.kyc.documents.select.passport': 'Паспорт',
    'page.body.kyc.documents.select.identityCard': 'Удостоверение личности',
    'page.body.kyc.documents.select.driverLicense': 'Водительское удостоверение',
    'page.body.kyc.documents.select.utilityBill': 'Коммунальная квитанция',

    'page.body.kyc.next': 'Дальше',
    'page.body.kyc.submit': 'Отправить',
    'page.body.kyc.head.phone': 'Верификация телефона',
    'page.body.kyc.head.identity': 'Верификация личности',
    'page.body.kyc.head.document': 'Верификация документов',

    'page.body.lock.oops': 'Ой!',
    'page.body.lock.expired': 'Похоже, что ваш пробный период истек',
    'page.body.lock.license': 'Похоже, что лицензионный ключ не верный',
    'page.body.lock.visit': 'Перейти на',

    'page.footer.legalDocuments': 'Документы',
    'page.footer.faq': 'Помощь',

    'page.header.signIn': 'Войти',
    'page.header.signIn.email': 'Почта',
    'page.header.signIn.password': 'Пароль',
    'page.header.signIn.password.message.error': 'Неправильный пароль',
    'page.header.signIn.receiveConfirmation': 'Не получили подтверждение по электронной почте?',
    'page.header.signIn.forgotPassword': 'Забыли пароль?',
    'page.header.signIn.resetPassword.title': 'Сброс пароля',
    'page.header.signIn.resetPassword.newPassword': 'Новый пароль',
    'page.header.signIn.resetPassword.repeatPassword': 'Повторите пароль',
    'page.header.signIn.resetPassword.button': 'Сбросить',
    'page.header.signIn.resetPassword.error': 'Поля пустые или не совпадают',

    'page.header.signUp': 'Регистрация',
    'page.header.signUp.email': 'Почта',
    'page.header.signUp.email.message.error': 'Почта недействительная',
    'page.header.signUp.password': 'Пароль',
    'page.header.signUp.password.message.error': 'Пароль должен содержать не менее 8 символов и не менее одной заглавной буквы и цифры',
    'page.header.signUp.confirmPassword': 'Подтвердить пароль',
    'page.header.signUp.confirmPassword.message.error': 'Пароли не совпадают',
    'page.header.signUp.referalCode': 'Промо-код',
    'page.header.signUp.terms': 'Я согласен со всеми заявлениями с точки зрения обслуживания',
    'page.header.signUp.modal.header': 'ПРОВЕРЬТЕ СВОЙ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ',
    'page.header.signUp.modal.body': 'Чтобы завершить регистрацию, найдите в своем' +
                                     ' почтовом ящике электронное письмо с дальнейшими инструкциями. ' +
                                     'Если вы не можете найти адрес электронной почты, проверьте свою' +
                                     ' электронную почту со спамом.',
    'page.header.signUp.modal.footer': 'OK',
    'page.resendConfirmation': 'Отправить подтверждение снова',
    'page.forgotPassword': 'Забыли пароль',
    'page.forgotPassword.message': 'Введите адрес электронной почты, чтобы сбросить пароль',
    'page.password2fa': '2FA подтверждение',
    'page.password2fa.message': 'Введите 2FA код с приложения',
    'page.forgotPassword.email': 'Почта',
    'page.forgotPassword.send': 'Отправить',
    'page.noDataToShow': 'Нет данных для отображения',

    'page.modal.withdraw.success': 'Успешно!',
    'page.modal.withdraw.success.message.content': 'Ваш вывод был успешно подтвержден. Пожалуйста, подождите, чтобы получить ' +
                                                   'несколько обязательных подтверждений для завершения этой транзакции.',
    'page.modal.withdraw.success.button': 'OK',

    // success messages
    'success.documents.accepted': 'Ваши документы успешно приняты',
    'success.identity.accepted': 'Данные профиля успешно приняты',
    'success.withdraw.action': 'Вывод успешен',
    'success.otp.enabled': '2FA успешно активирован',
    'success.otp.disabled': '2FA успешно деактивирован',
    'success.password.changed': 'Пароль изменен',
    'success.password.forgot': 'Ссылка для сброса пароля была отправлена на вашу почту',
    'success.password.changed.successfuly': 'Пароль успешно изменен',
    'success.order.cancelling': 'Запрос отменяется',
    'success.order.canceled': 'Запрос отменен',
    'success.order.canceled.all': 'Все запросы были отменены',
    'success.order.cancelling.all': 'Все запросы отменяются',
    'success.order.created': 'Запрос успешно создан',
    'success.phone.verification.send': 'Код верификации был отправлен на ваш телефон',
    'success.phone.confirmed': 'Ваш телефон подтвержден',
    'success.phone.confirmation.message': 'Успех!',
    'success.message.sent': 'Письмо было успешно отправлено',
    'success.email.confirmed': 'Email был успешно подтвержден',

    // error messages
    // barong
    'resource.labels.private': 'Нельзя обновить поле',
    'resource.user.no_activity': 'Активность не записана или неправильная тема',
    'resource.profile.not_exist': 'У пользователя нет профиля',
    'resource.profile.exist': 'Профиль уже существует',
    'resource.api_key.2fa_disabled': 'Разрешены только аккаунты с включенным 2FA',
    'resource.api_key.missing_otp': 'Отсутствует код 2FA',
    'resource.api_key.invalid_otp': 'Код 2FA недействителен',
    'resource.phone.twillio': 'Ошибка с Twilio',
    'resource.phone.invalid_num': 'Номер телефона недействителен',
    'resource.phone.exists': 'Номер телефона уже существует',
    'resource.phone.number_exist': 'Номер телефона уже существует',
    'resource.phone.verification_invalid': 'Телефон не найден или код подтверждения недействителен',
    'resource.documents.limit_reached': 'Достигнуто максимальное количество документов',
    'resource.documents.limit_will_be_reached': 'Количество документов достигнет предела при этой загрузке',
    'resource.otp.already_enabled': '2FA уже включен для этого аккаунта',
    'resource.otp.invalid': 'Код 2FA недействителен',
    'resource.password.doesnt_match': 'Новые пароли не совпадают',
    'resource.password.prev_pass_not_correct': 'Предыдущий пароль неверен',
    'resource.password.no_change_provided': 'Новый пароль не может быть таким же, как старый',
    'resource.document.empty_doc_expire': 'Срок действия недействителен',
    'password.requirements': 'Пароль не соответствует минимальным требованиям',
    'password.password.password_strength': 'Пароль слишком слабый',

    'email.taken': 'Почта уже зарегистрирована',

    'identity.user.invalid_referral_format': 'Неверный формат UID реферала',
    'identity.user.referral_doesnt_exist': 'Реферал не существует',
    'identity.user.active_or_doesnt_exist': 'Пользователь не существует или уже был активирован',
    'identity.password.user_doesnt_exist': 'Пользователь не существует',
    'identity.user.passwords_doesnt_match': 'Пароли не совпадают',
    'identity.user.utilized_token': 'JWT уже был использован',
    'identity.session.invalid_login_params': 'Неправильный адрес электронной почты или пароль',
    'identity.session.invalid': 'Неверный сеанс',
    'identity.captcha.required': 'требуется captcha_response',
    'identity.captcha.mandatory_fields': 'Обязательные поля должны быть заполнены',
    'identity.session.not_active': 'Ваш аккаунт не активен',
    'identity.session.banned': 'Ваш аккаунт заблокирован',
    'identity.session.invalid_params': 'Неправильный адрес электронной почты или пароль',
    'identity.session.missing_otp': 'Отсутствует код 2FA',
    'identity.session.invalid_otp': 'Код 2FA недействителен',
    'first_name.invalid': 'Имя неверное',
    'last_name.invalid': 'Фамилия неверная',
    'city.invalid': 'Город неверный',
    'postcode.invalid': 'Почтовый индекс неверен',
    'address.invalid': 'Адрес неверен',
    'first_name.blank': 'Имя отсутствует',
    'last_name.blank': 'Фамилия отсутствует',
    'dob.blank': 'Дата рождения отсутствует',
    'address.blank': 'Адрес отсутствует',
    'city.blank': 'Город отсутствует',
    'country.blank': 'Страна отсутствует',
    'postcode.blank': 'Почтовый индекс отсутствует',
    'country.must have alpha2 or alpha3 format': 'Страна должна быть в буквенном формате',

    'totp.error': 'Код 2FA неверен',

    'record.not_found': 'Запись не найдена',
    'jwt.decode_and_verify': 'Не удалось декодировать и проверить JWT',
    'authz.invalid_session': 'Не удалось расшифровать куки',
    'authz.user_not_active': 'Пользователь не активен',
    'authz.invalid_signature': 'Заголовок API-ключа \'signature\' недействителен',
    'authz.apikey_not_active': 'Состояние ключа API «неактивно»',
    'authz.disabled_2fa': 'Владелец ключа API отключил 2FA',
    'authz.invalid_api_key_headers': 'Пустые или отсутствующие заголовки ключей API',
    'authz.permission_denied': 'Путь занесен в черный список',
    'authz.unexistent_apikey': 'Заголовок X-Auth-Apikey недействителен',

    // validation errors
    // identity module
    'identity.user.missing_email': 'Почта отсутствует',
    'identity.user.empty_email': 'Почта отсутствует',
    'identity.user.missing_password': 'Пароль отсутствует',
    'identity.user.empty_password': 'Пароль отсутствует',
    'identity.user.missing_token': 'Токен отсутствует',
    'identity.user.empty_token': 'Токен отсутствует',
    'identity.user.missing_reset_password_token': 'Токен пароля отсутствует',
    'identity.user.empty_reset_password_token': 'Токен пароля отсутствует',
    'identity.user.missing_confirm_password': 'Подтверджение пароля отсутствует',
    'identity.user.empty_confirm_password': 'Подтверджение пароля отсутствует',

    'identity.session.missing_emai': 'Почта отсутствует',
    'identity.session.missing_password': 'Почта отсутствует',
    'identity.session.invalid_captcha_format': 'Неверный формат captcha',

    // resource module
    'resource.otp.missing_code': '2FA отсутствует',
    'resource.otp.empty_code': '2FA отсутствует',

    'resource.labels.missing_key': 'Ключ отсутствует',
    'resource.labels.empty_key': 'Ключ отсутствует',
    'resource.labels.missing_value': 'Значение отсутствует',
    'resource.labels.empty_value': 'Значение отсутствует',

    'resource.documents.missing_doc_expire': 'Дата документа отсутствует',
    'resource.documents.empty_doc_expire': 'Дата документа отсутствует',
    'resource.documents.missing_doc_type': 'Тип документа отсутствует',
    'resource.documents.empty_doc_type': 'Тип документа отсутствует',
    'resource.documents.missing_doc_number': 'Номер документа отсутствует',
    'resource.documents.empty_doc_number': 'Номер документа отсутствует',
    'resource.documents.missing_upload': 'Фотография документа отсутствует',


    'resource.user.missing_topic': 'Тема отсутствует',
    'resource.user.empty_topic': 'Тема отсутствует',
    'resource.user.missing_old_password': 'Старый пароль отсутствует',
    'resource.user.empty_old_password': 'Старый пароль отсутствует',
    'resource.user.missing_new_password': 'Новый пароль отсутствует',
    'resource.user.empty_new_password': 'Новый пароль отсутствует',
    'resource.user.missing_confirm_password': 'Подтверждение пароля отсутствует',
    'resource.user.empty_confirm_password': 'Подтверждение пароля отсутствует',

    'resource.profile.missing_first_name': 'Имя отсутствует',
    'resource.profile.missing_last_name': 'Фамилия отсутствует',
    'resource.profile.missing_dob': 'Дата рождения отсутствует',
    'resource.profile.missing_address': 'Адресс отсутствует',
    'resource.profile.missing_postcode': 'Почтовый индекс отсутствует',
    'resource.profile.missing_city': 'Город отсутствует',
    'resource.profile.missing_country': 'Страна отсутствует',

    'resource.api_key.missing_algorithm': 'Алгоритм отсутствует',
    'resource.api_key.empty_algorithm': 'Алгоритм отсутствует',
    'resource.api_key.empty_kid': 'KID отсутствует',
    'resource.api_key.empty_scope': 'Scope отсутствует',
    'resource.api_key.missing_totp': '2FA отсутствует',
    'resource.api_key.empty_totp': '2FA отсутствует',
    'resource.api_key.missing_kid': 'KID отсутствует',
    'resource.api_key.empty_state': 'Состояние отсутствует',

    'resource.phone.missing_phone_number': 'Номер телефона отсутствует',
    'resource.phone.empty_phone_number': 'Номер телефона отсутствует',
    'resource.phone.missing_verification_code': 'Код проверки отсутствует',
    'resource.phone.empty_verification_code': 'Код проверки отсутствует',

    // peatio
    'account.currency.doesnt_exist': 'Валюта не существует',
    'account.deposit.invalid_state': 'Депозит недействителен',
    'account.deposit.non_integer_limit': 'Невозможно проанализировать отправленное вами значение в тип Integer',
    'account.deposit.invalid_limit': 'Неверный лимит',
    'account.deposit.non_positive_page': 'Значение страницы должно быть положительным',
    'account.deposit.empty_txid': 'Txid отсутствует, Txid пуст',
    'account.deposit_address.invalid_address_format': 'Неверный формат адреса депозита',
    'account.deposit_address.doesnt_support_cash_address_format': 'Валюта не поддерживает формат денежных адресов',
    'account.withdraw.non_integer_limit': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'account.withdraw.invalid_limit': 'Неверный лимит',
    'account.withdraw.non_positive_page': 'Значение страницы должно быть положительным',
    'account.withdraw.non_integer_otp': 'Значение 2FA не может быть проанализировано в тип Integer',
    'account.withdraw.empty_otp': '2FA отсутствует, 2FA пуст',
    'account.withdraw.empty_rid': 'Rid отсутствует, rid пуст',
    'account.withdraw.non_decimal_amount': 'Значение суммы, которую вы отправили, не может быть проанализировано в десятичном виде',
    'account.withdraw.non_positive_amount': 'Значение суммы должно быть положительным',
    'account.deposit.not_permitted': 'Депозиты разрешены после подтверждения телефона',
    'account.withdraw.not_permitted': 'Пожалуйста, пройдите соответствующие шаги проверки для вывода средств',
    'account.withdraw.insufficient_balance': 'Недостаточно средств на счете',
    'account.withdraw.invalid_amount': 'Неверная сумма снятия',
    'account.withdraw.create_error': 'Не удалось создать вывод',
    'account.withdraw.invalid_otp': 'Неверный 2FA',
    'account.withdraw.disabled_api': 'Снятие API отключено',

    'market.market.doesnt_exist': 'Рынок не существует',
    'market.order.invalid_state': 'Неверное состояние депозита',
    'market.order.invalid_limit': 'Неверный лимит',
    'market.order.non_integer_limit': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'market.trade.empty_page': 'Страница отсутствует или пуста',
    'market.order.invalid_order_by': 'Неверный заказ',
    'market.order.invalid_side': 'Неверная сторона заказа',
    'market.order.non_decimal_volume': 'Невозможно проанализировать значение тома, которое вы отправили, в десятичный тип',
    'market.order.non_positive_volume': 'Значение объема должно быть положительным',
    'market.order.invalid_type': 'Неверный тип заказа',
    'market.order.non_decimal_price': 'Невозможно проанализировать значение тома, которое вы отправили, в десятичный тип',
    'market.order.non_positive_price': 'Значение объема должно быть положительным',
    'market.order.non_integer_id': 'Невозможно проанализировать отправленное вами значение идентификатора в целочисленный тип',
    'market.order.empty_id': 'Идентификатор отсутствует или пуст',
    'market.trade.non_integer_limit': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'market.trade.invalid_limit': 'Неверный лимит',
    'market.trade.non_integer_timestamp': 'Отправленное вами время не может быть проанализировано в типе Integer',
    'market.trade.empty_timestamp': 'Метка времени отсутствует или пуста',
    'market.trade.invalid_order_by': 'Неверный заказ',
    'market.order.insufficient_market_liquidity': 'Достаточная рыночная ликвидность',
    'market.order.invalid_volume_or_price': 'Неверный объем или цена',
    'market.order.create_error': 'Не удалось создать запрос',
    'market.order.cancel_error': 'Не удалось отменить запрос',
    'market.order.market_order_price': 'Рыночный ордер не имеет цены',
    'market.trade.not_permitted': 'Пожалуйста, пройдите соответствующие шаги проверки, чтобы включить торговлю',
    'market.account.insufficient_balance': 'Недостаточно средств на счете',

    'public.currency.doesnt_exist': 'Валюта не существует',
    'public.currency.invalid_type': 'Неверный тип валюты',
    'public.market.doesnt_exist': 'Рынок не существует',
    'public.order_book.non_integer_ask_limit': 'Не удалось проанализировать отправляемое вами предельное значение в тип Integer',
    'public.order_book.invalid_ask_limit': 'Неверный лимит спроса',
    'public.order_book.non_integer_bid_limit': 'Отправленное вами предельное значение ставки не может быть проанализировано в типе Integer',
    'public.order_book.invalid_bid_limit': 'Неверный лимит ставок',
    'public.trade.non_integer_limit': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'public.trade.invalid_limit': 'Неверный лимит',
    'public.trade.non_positive_page': 'Значение страницы должно быть положительным',
    'public.trade.non_integer_timestamp': 'Отправленное вами время не может быть проанализировано в типе Integer',
    'public.trade.invalid_order_by': 'Неверный заказ',
    'public.market_depth.non_integer_limit': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'public.market_depth.invalid_limit': 'Неверный лимит',
    'public.k_line.non_integer_period': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'public.k_line.invalid_period': 'Неверный период',
    'public.k_line.non_integer_time_from': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'public.k_line.empty_time_from': 'Параметр Time_from отсутствует или пуст',
    'public.k_line.non_integer_time_to': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'public.k_line.empty_time_to': 'Параметр Time_to отсутствует или пуст',
    'public.k_line.non_integer_limit': 'Не удается проанализировать отправляемое вами предельное значение в тип Integer',
    'public.k_line.invalid_limit': 'Неверный лимит',

    'server.internal_error': 'Внутренняя ошибка сервера',

    ...nationalitiesNames,
};
