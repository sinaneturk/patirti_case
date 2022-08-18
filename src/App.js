import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAndSetProduct } from './redux/actions/product.actions';
import { FiChevronLeft, FiChevronRight, FiShare } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go';
import Sheet from 'react-modal-sheet';


function App() {
  const {product} = useSelector(state=>state.productReducer)
  const [selected_index , setSelecedIndx] = useState(0)
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAndSetProduct())
  },[])

  const goToNextImage = () => {
    const next_index =  selected_index === product.images.length-1 ? 0:selected_index + 1;
    setSelecedIndx(next_index)
  }

  const goToPreviousImage = () => {
    const next_index =  selected_index === 0 ? product.images.length-1 : selected_index - 1;
    setSelecedIndx(next_index)
  }

  const addToBasket = () => {
    setOpen(true)
  }
  return (
    <div className="App">
     <div className='slider-container'>
      <div className='icon-container icon-left'>
        <FiChevronLeft onClick={goToPreviousImage} size={20}/>
      </div>
      <div className='images-container'>
        {
          product.images?.map((image,index)=>{
            return (
            <img key={index} style={{display:index === selected_index ? "block":"none"}} src={image}/>
            )
          }
          )
        }
        <div className='dots-container'>
          {
            Array.from(Array(product.images?.length).keys()).map((item)=>{
              return (
                <GoPrimitiveDot key={item} size={item === selected_index ? 16:13}  color={item === selected_index ? "green": "grey"}/>
              )
            })
          }
        </div>
      </div>
      <div className='icon-container icon-right'>
        <FiChevronRight onClick={goToNextImage}  size={20}/>
      </div>
     </div>

     <div className='detay-text'>
          <a href='#' className='categori-info' >Şapka kategorisinde en çok satılan 1. ürün <FiChevronRight size={15}/> </a>
          <p className='detail-info'><span className='special'>Accesory City</span> Arkası Cırtlı Ayarlanabilir <FiShare style={{float:"right" , marginRight:20}} size={17}/></p>
     </div>

     <div className='sepet-container'>
        <p className='price'>29,90 TL</p>
        <button className='sepet-button' onClick={addToBasket}>Sepete Ekle</button> 
     </div>

     <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <p>Bedenler buraya gelecek</p>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
}

export default App;
