export const GlobalUrlToRedirect = Object.freeze({
  BASE_REDIRECT_URL: 'https://beta-e-service.ru.ac.th/',
  BASE_QRPAYMENT_URL: 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=',
  BASE_QRPAYMENT_URL_TEST: 'https://devtest.ru.ac.th/ThaiQR/genQRAllSys?totalAmount=1&username=9999999999&tel=9999999999&duedate=290421&sysid=141&biller=8382',
});

export interface MessegeNoti {
  MESSEGE_HEADER: string;
  MESSEGE_TEXT1: string;
  MESSEGE_TEXT2: string;
  MESSEGE_STATUS: string;
}
