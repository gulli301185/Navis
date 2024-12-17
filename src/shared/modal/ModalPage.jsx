
// const ModalPage = () => {
//     const [changeData, setChangeData] =useState(false)

    
//     const closeModal = () => {
//         console.log("Закрыть модалку"); 
//         setChangeData(false);
//       };
    
//       const saveChanges = () => {
//         console.log("Сохранение изменений");
//         setChangeData(false); 
//       };
//   return (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center">
//             <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
//               <h2 className="text-2xl font-bold mb-4">Изменить данные</h2>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-600">
//                   ФИО:
//                 </label>
//                 <input value="Нурзида Асанбековна" className="mt-2" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-600">
//                   Электронная почта:
//                 </label>
//                 <input value="nurziasanbekova@gmail.com" className="mt-2" />
//               </div>
//               <div className="flex justify-end gap-2">
//                 <button
//                   className="px-4 py-2 bg-gray-300 text-black rounded-lg"
//                   onClick={closeModal} 
//                 >
//                   Закрыть
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//                   onClick={saveChanges} 
//                 >
//                   Сохранить
//                 </button>
//               </div>
//             </div>
//           </div>
//   )
// }

// export default ModalPage
