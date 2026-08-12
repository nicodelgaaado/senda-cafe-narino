// Copia este archivo como wompi-config.js y cárgalo antes de widget.js.
// La firma de integridad debe generarse en tu backend para cada pedido.
window.CAFE_WOMPI = {
  publicKey: 'pub_test_REEMPLAZAR',
  integritySignature: 'FIRMA_SHA256_GENERADA_EN_EL_BACKEND',
  redirectUrl: window.location.origin
};
