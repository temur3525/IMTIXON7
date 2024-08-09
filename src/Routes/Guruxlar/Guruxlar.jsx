import './Guruxlar.css'
import { Link } from "react-router-dom"
import { GoHomeFill } from "react-icons/go";
import { PiStudentBold } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import img2 from "../../assets/images/menu.svg"
import { MdMenuOpen } from "react-icons/md";
const Guruxlar = () => {
  return (
    <div>       
     <Link to="/"> <div className="nm"><GoHomeFill className='icn'/><p className='pl1'>Xisobot</p></div></Link>
    <Link to="/oquvchilar"><div className="nm1"><PiStudentBold className='icn1'/><p className='pl2'>O'quvchilar</p></div></Link>
    <Link to="/guruxlar"><div className="nm2"><MdGroups className='icn2'/><p className='pl3'>Guruhlar</p></div></Link>
    <Link to="/tolov"><div className="nm3"><FaWallet className='icn3'/><p className='pl4'>To'lovlar</p></div></Link>
    <Link to="/davomat"><div className="nm4"><MdFolderShared className='icn4'/><p className='pl5'>Davomat</p></div></Link>
      <Link to="/mirojatlar"><div className="nm5"><IoChatboxEllipses className='icn5'/><p className='pl6'>Murojaatlar</p></div></Link>
      <div className="menu">


</div>
<img src={img2} alt="" className="img3_oquvchilar" />
<div className="mn_mk1_lo">
<p className="poer_xisobotlar">CRM <br /> PANEL</p>
<div className="pot_xisobotlar_wer"></div>
<MdMenuOpen className='menu_icon_xisobotlar'/>
</div>

<p className="drcfvg_xsdf">Guruhlar</p>

<p className="cftvgb_xsdc">Yangi guruh qo’shish</p>

<form className='form_guruxlar_form'>
  <input type="text"  className='input_guruxlar1' placeholder='Guruh yo’nalishi' required/>
  <input type="text"  className='input_guruxlar2' placeholder='Dars kunlari' required/>
  <input type="number"  className='input_guruxlar3' placeholder='Dars vaqti' required/>
  <input type="text"  className='input_guruxlar4' placeholder='O’qituvchi' required/>
  <input type="number"  className='input_guruxlar5' placeholder='O’qituvchi tell nomeri' required/>
  <button className="btn_dxcfg">Qo’shish</button>
</form>
<p className="xsdc">Mavjud guruhlar</p>

<p className="wer_guruxlar">9.08.2024</p>



    </div>
  )
}

export default Guruxlar