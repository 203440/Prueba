import Head from "../../components/head"
import '../../public/css/carrito.css'
import GooglePayButton from '@google-pay/button-react'

import { toast } from 'react-toastify';

export default function Carrito(){
    const notify = () => {
        toast.success('Pedido confirmado', {
          position: "bottom-right",
          autoClose: 3500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          });
      }
    return (
        <div>
            <Head></Head>
            <div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Cantidad </th>
                                <th>Nombre</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Producto Ejemplo</td>
                            <td>$100.00</td>
                        </tr><tr>
                            <td>1</td>
                            <td>Producto Ejemplo</td>
                            <td>$100.00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="buttons_carrito">
                    <button id="vaciar">Vaciar carrito</button>
                    <GooglePayButton
                        environment="TEST"
                        paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0, 
                            allowedPaymentMethods: [
                                {
                                    type: 'CARD',
                                    parameters: {
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                            gateway: 'example',
                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                    },
                                },
                            ],
                            merchantInfo: {
                                merchantId: '12345678901234567890',
                                merchantName: 'Demo Merchant',
                            },
                            transactionInfo: {
                                totalPriceStatus: 'FINAL',
                                totalPriceLabel: 'Total',
                                totalPrice: '1.00',
                                currencyCode: 'MXN',
                                countryCode: 'MX',
                            },
                            shippingAddressRequired: true,
                            callbackIntents: ['PAYMENT_AUTHORIZATION'],
                        }}
                        onLoadPaymentData={paymentRequest => {
                         console.log('Success', paymentRequest);
                        }}
                        onPaymentAuthorized= {paymentData => {
                            console.log('Autorizado', paymentData);
                            notify()
                            return { transactionState: 'SUCCESS' }
                        }}
                        existingPaymentMethodRequired = "false"
                        buttonColor="black"
                        buttonType="Buy"
                    />
                </div>
            </div>
        </div>
    )
}