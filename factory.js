class Notification {
  send(message) {
    throw new Error("send() must be implemented");
  }
}

class EmailNotification extends Notification {
  send(message) {
    return `Email sent: ${message}`;
  }
}

class SMSNotification extends Notification {
  send(message) {
    return `SMS sent: ${message}`;
  }
}

class PushNotification extends Notification {
  send(message) {
    return `Push notification sent: ${message}`;
  }
}

class NotificationFactory {
  static create(type) {
    const key = String(type).toLowerCase();
    if (key === "email") return new EmailNotification();
    if (key === "sms") return new SMSNotification();
    if (key === "push") return new PushNotification();
    throw new Error("Unsupported notification type");
  }
}

const email = NotificationFactory.create("email");
const sms = NotificationFactory.create("sms");
const push = NotificationFactory.create("push");
console.log(email.send("Hello by email"));
console.log(sms.send("Hello by sms"));
console.log(push.send("Hello by push"));
