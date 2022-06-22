# Cajero Automático

**Description:** *Proyecto final de la Kata JavaScript en [Devf](https://devf.la) con los Senseis Joel y Miguel - Batch 17*

---

**Detalles del proyecto:** Crear un programa con JavaScript donde simulemos la interacción con un cajero automático.

Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:
- Persona 1
- Persona 2
- Persona 3

Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

```
var cuentas = [
  { nombre: “Mali”, saldo: 200 }
  { nombre: “Gera”, saldo: 290 }
  { nombre: “Maui”, saldo: 67 }
];
```

Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
- Consultar saldo
- Ingresar monto
- Retirar Monto

<br>

- Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. 
- Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
- Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.