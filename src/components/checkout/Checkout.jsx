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
import "./Checkout.css"

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
            confirmButtonColor: "#FB2E86",
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
    <div className="container table mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="text-4xl font-bold mt-5 mb-10 flex justify-center">Datos de facturación</h2>
      <form className="table mx-auto">
        <div className="grid mb-6 gap-10 md:grid-cols-2 ">
          <div>
            <label htmlFor="name" className="block mb-4 font-bold">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="bg-[#F6F5FF] border-b-2 border-gray-400"
              placeholder="Ingrese el nombre"
              onChange={updateUser}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-4 font-bold">
              Telefono
            </label>
            <input
              type="text"
              name="phone"
              className="bg-[#F6F5FF] border-b-2 border-gray-400"
              placeholder="Ingrese su teléfono"
              onChange={updateUser}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-4 font-bold">
              Correo
            </label>
            <input
              type="email"
              name="email"
              className="bg-[#F6F5FF] border-b-2 border-gray-400"
              placeholder="Ingrese email"
              onChange={updateUser}
            />
          </div>
          <div>
            <label
              htmlFor="repeatedEmail"
              className="block mb-4 font-bold"
            >
              Correo
            </label>
            <input
              type="email"
              name="repeatedEmail"
              className="bg-[#F6F5FF] border-b-2 border-gray-400"
              placeholder="Repetir email"
              onChange={updateUser}
            />
          </div>
        </div>
      </form>
      <div className="container mx-auto flex flex-col items-center ">
      <button className="btn-f text-black font-bold rounded-lg px-2 py-2" onClick={getOrder}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Checkout;
