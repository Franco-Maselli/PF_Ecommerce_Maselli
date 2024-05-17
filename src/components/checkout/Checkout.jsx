import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });
  const [emailMatch, setEmailMatch] = useState(true);
  const [error, setError] = useState({});

  const { cart, getTotal, clearCart } = useContext(Context);

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const validateEmails = () => {
    if (user.email === user.repeatedEmail) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = "Tenés que agregar un nombre";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const getOrder = async () => {
    const isFormValid = validateForm();
    validateEmails();
    if (isFormValid && emailMatch) {
      const ordersCollection = collection(db, "orders");

      try {
        for (const item of cart) {
          const productRef = doc(db, "productos", item.id);
          const productDoc = await getDoc(productRef);

          const currentStock = productDoc.data().stock;

          if (currentStock >= item.quantity) {
            await updateDoc(productRef, {
              stock: currentStock - item.quantity,
            });
          } else {
            console.log(`No hay suficiente stock para ${item.name}`);
          }
          const order = {
            buyer: user,
            cart: cart,
            total: getTotal(),
            fechaDeCompra: Timestamp.now(),
          };

          const orderDocRef = await addDoc(ordersCollection, order);
          Swal.fire({
            title: "Gracias por tu compra",
            text: `El número de orden es: ${orderDocRef.id}`,
            icon: "success",
            confirmButtonText: "Confirmar",
          }).then(() => {
            clearCart();
            navigate("/");
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold">Datos de facturación</h2>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingrese el nombre"
              onChange={updateUser}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Telefono
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Ingrese su teléfono"
              onChange={updateUser}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Correo
            </label>
            <input
              type="email"
              name="email"
              placeholder="Ingrese email"
              onChange={updateUser}
            />
          </div>
          <div>
            <label
              htmlFor="repeatedEmail"
              className="block mb-2 text-sm font-medium"
            >
              Correo
            </label>
            <input
              type="email"
              name="repeatedEmail"
              placeholder="Ingrese nuevamente el email"
              onChange={updateUser}
            />
          </div>
        </div>
      </form>
      <button onClick={getOrder}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;
