import './Oquvchilar.css'
import { Link } from "react-router-dom"
import { GoHomeFill } from "react-icons/go";
import { PiStudentBold } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import img2 from "../../assets/images/menu.svg"
import { MdMenuOpen } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
const Oquvchilar = () => {
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
<p className="der_des">O’quvchilar</p>

<p className="ser_der_sed">Yangi o’quvchi qo’shish</p>
<form className="from_oquv">
  <input type="text"  className='input_text_oquv' placeholder='O’quvchi ismi' required/>
  <input type="number"  className='input_number_oquv' placeholder='Telefon raqam' required/>
<input type="text"  className='input_otaonatext_yonalishi' placeholder='Yonalishi' required/>
  <input type="text"  className='input_otaonatext_oquv' placeholder='Ota-onasi ismi' required/>
  <input type="number"  className='input_otanumber_oquv' placeholder='Ota onasi nomeri' required/>
<button className="btn_oquvchilar">Qo’shish</button>
</form>

<p className="plaw_oquv">O’quvchi ismi</p>
<p className="plaw_oquv1">Telefon raqam</p>
<p className="plaw_oquv2">Ota-onasi ismi</p>
<p className="plaw_oquv3">Ota onasi nomeri</p>

<img src={img2} alt="" className="img2_oquvchilar" />
<div className="mn_mk_lo">
<p className="poer_xisobotlar">CRM <br /> PANEL</p>
<div className="pot_xisobotlar_wer"></div>
<MdMenuOpen className='menu_icon_xisobotlar'/>
</div>



<p className="rtgh_dxcfvg">Bizning o’quvchilar</p>

<input type="text" className="input_owuvchi_cvgb" />
<IoMdSearch className='saerch_lupa_uquv'/>
<p className="wer_oquv">9.08.2024</p>



    </div>
  )
}

export default Oquvchilar