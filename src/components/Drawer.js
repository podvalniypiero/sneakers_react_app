function Drawer({onClose, onRemove,items = []}){
    return(
      <div className="overlay">
        <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">Корзина
        <img onClick = {onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

      {
        items.length > 0 ? ( <div>
        <div className="items">

        {items.map((obj) =>( 
                 <div key={obj.id} className="cartItem d-flex align-center mb-20">
                 
                 <div style={{backgroundImage: `url(${obj.imageURL})`}} 
                 className="cartItemImg d-flex"></div>
       
                   
                   
                   <div className="mr-20 flex">
                     <p className="mb-5">{obj.title}</p>
                     <b>{obj.price} руб.</b>
                   </div>
                   <img onClick={()=>onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                 </div>
        ))}
         </div> 
                 <div className="cartTotalBlock ">
                 <ul className="">
                   <li className="d-flex">
                     <span>Итого:</span>
                     <div></div>
                     <b>21 498 руб.</b>
                     </li>
       
                     <li className="d-flex">
                     <span>Налог 5%:</span>
                     <div></div>
                     <b>10 074 руб.</b>
                     </li>
                 </ul>
       
                 <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
       
                 </div>
                 </div>
                 
         )
         :         
         (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
         <img className="mb-20" width={120} height={120} src="/img/cartEmpty.jpg" alt="Empty Card"/>
         <h2>Корзина пустая</h2> 
         <p className="mb-40 opacity-6 align-center justify-center flex">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
         <button onClick={onClose} className="greenButton">
           <img src="/img/arrowBack.svg" alt="Arrow"/>
           Вернуться назад
         </button>

       </div>)

      }
        
          </div>

      </div>
    );
}

export default Drawer;