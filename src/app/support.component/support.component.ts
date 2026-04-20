import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

// Definición de tipos para seguridad en el desarrollo
type AppType = 'cliente' | 'negocio' | 'repartidor';

interface SupportConfig {
  title: string;
  color: string;
  hoverColor: string;
  email: string;
  faqs: { q: string; a: string }[];
}

@Component({
  selector: 'nexo-support.component',
  imports: [CommonModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss',
})
export class SupportComponent {
  private route = inject(ActivatedRoute);

  // Obtenemos el parámetro 'app' de la URL (cliente, negocio o repartidor)
  private appParam = toSignal(this.route.params);

  // Diccionario de configuración centralizado
  private readonly SUPPORT_DATA: Record<AppType, SupportConfig> = {
    cliente: {
      title: 'Timki Delivery (Clientes)',
      color: '#10B981', // Verde éxito
      hoverColor: '#059669',
      email: 'soporte@timkidelivery.com',
      faqs: [
        {
          q: '¿No recibo el código de verificación (OTP) por WhatsApp?',
          a: 'Verifica tu conexión a internet o asegúrate de haber ingresado el número correctamente. Si el problema persiste, puedes iniciar sesión de forma instantánea usando tu cuenta de Google o Facebook.'
        },
        {
          q: 'Mi GPS no marca mi ubicación exacta, ¿qué hago?',
          a: 'Asegúrate de tener los permisos de ubicación activos en tu teléfono. También puedes mover el pin rojo manualmente en el mapa antes de confirmar tu dirección de entrega.'
        },
        {
          q: '¿Puedo quitar ingredientes o personalizar mi pedido?',
          a: '¡Sí! Al seleccionar un producto (como una hamburguesa), verás opciones para quitar ingredientes, elegir salsas o dejar notas especiales antes de agregarlo al carrito.'
        },
        {
          q: 'Mi pedido llegó incompleto o en mal estado',
          a: 'Lamentamos el inconveniente. Ve a "Mis Pedidos", selecciona el pedido en cuestión y usa el botón de "Reportar problema". Nuestro equipo revisará el caso para gestionar una solución o reembolso.'
        },
        {
          q: '¿Qué pasa si el repartidor se demora demasiado?',
          a: 'Puedes rastrear al repartidor en tiempo real desde la app. Si el tiempo excede los 15 minutos de la estimación original, contáctanos desde el botón superior.'
        }
      ]
    },
    negocio: {
      title: 'Timki Negocio',
      color: '#3C8DFF', // Azul corporativo
      hoverColor: '#2563EB',
      email: 'comercios@timkidelivery.com',
      faqs: [
        {
          q: 'Mi tablet/celular no suena cuando entra un pedido',
          a: 'Revisa que tu dispositivo no esté en modo "No Molestar" o ahorro de batería, y que el volumen multimedia esté al máximo. La app debe tener permisos para ejecutarse en segundo plano.'
        },
        {
          q: 'Me quedé sin un ingrediente o producto, ¿cómo lo oculto?',
          a: 'Entra a la sección "Mi Catálogo". Desde ahí puedes desactivar temporalmente cualquier producto o complemento al instante para que los clientes ya no puedan pedirlo.'
        },
        {
          q: '¿Cómo manejo la emisión de boletas o facturas (SUNAT)?',
          a: 'En los detalles del pedido, Timki te proporcionará los datos del cliente (DNI/RUC). La emisión del comprobante electrónico debes realizarla desde tu propio sistema de facturación y enviarla junto con el producto.'
        },
        {
          q: '¿Qué hago si tengo que cancelar un pedido que ya acepté?',
          a: 'Si surge un imprevisto mayor, cancela la orden desde tu panel activo indicando el motivo. Esto notificará automáticamente al cliente y liberará al repartidor de la ruta.'
        },
        {
          q: '¿Cuándo y cómo recibo el dinero de mis ventas por la app?',
          a: 'Los cortes de liquidación se realizan según tu contrato comercial. El dinero se transfiere directamente a la cuenta bancaria registrada a nombre del titular o representante de la empresa.'
        }
      ]
    },
    repartidor: {
      title: 'Timki Repartidor',
      color: '#FF6F3C', // Naranja repartidor
      hoverColor: '#e55a2b',
      email: 'repartidores@timkidelivery.com',
      faqs: [
        {
          q: '¿Problemas con la validación de DNI al registrarme?',
          a: 'Asegúrate de que la foto de tu documento sea nítida, sin reflejos de flash y que los datos sean legibles. La revisión por nuestro equipo de seguridad toma un máximo de 24 horas hábiles.'
        },
        {
          q: 'Llegué al punto de entrega pero el cliente no sale',
          a: 'Utiliza el botón de llamada dentro de la app para contactarlo. Si no hay respuesta tras 5 a 10 minutos de espera en la ubicación exacta, contacta a soporte para cancelar la orden sin afectar tus métricas.'
        },
        {
          q: '¿El uso de la app consume mis datos móviles?',
          a: 'Sí, la app requiere conexión a internet y uso de GPS constante para trazar tus rutas y recibir pedidos. Te recomendamos contar con un plan de datos activo.'
        },
        {
          q: 'Tuve un problema con mi vehículo a mitad de un pedido',
          a: 'Tu seguridad es primero. Estaciónate en un lugar seguro y usa el botón de soporte para comunicarte con nosotros. Reasignaremos tu pedido a otro repartidor cercano.'
        }
      ]
    }
  };

  // Computamos la configuración actual basándonos en la URL
  config = computed(() => {
    const type = this.appParam()?.['app'] as AppType;
    return this.SUPPORT_DATA[type] || this.SUPPORT_DATA['cliente'];
  });

}
