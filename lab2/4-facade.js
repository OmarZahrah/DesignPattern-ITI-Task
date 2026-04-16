class PaymentService {
  processPayment(order) {
    console.log(`Payment processed for ${order.customerName}.`);
  }
}

class InventoryService {
  updateInventory(order) {
    console.log(`Inventory updated for ${order.itemName}.`);
  }
}

class NotificationService {
  sendNotification(order) {
    console.log(`Notification sent to ${order.customerName}.`);
  }
}

class LoggingService {
  logTransaction(order) {
    console.log(`Transaction logged for ${order.itemName}.`);
  }
}

class CheckoutService {
  constructor() {
    this.paymentService = new PaymentService();
    this.inventoryService = new InventoryService();
    this.notificationService = new NotificationService();
    this.loggingService = new LoggingService();
  }

  validateData(order) {
    if (!order.customerName || !order.itemName || !order.amount) {
      console.log("Order data is invalid.");
      return false;
    }

    console.log("Order data is valid.");
    return true;
  }

  checkout(order) {
    if (!this.validateData(order)) {
      return;
    }

    this.paymentService.processPayment(order);
    this.inventoryService.updateInventory(order);
    this.notificationService.sendNotification(order);
    this.loggingService.logTransaction(order);
    console.log("Checkout completed.");
  }
}

const order = {
  customerName: "Omar",
  itemName: "Laptop",
  amount: 25000,
};

const checkoutService = new CheckoutService();
checkoutService.checkout(order);
