import './Davomat.css'
import { Link } from "react-router-dom"
import { GoHomeFill } from "react-icons/go";
import { PiStudentBold } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import img2 from "../../assets/images/menu.svg"
import { MdMenuOpen } from "react-icons/md";
const Davomat = () => {
  return (
    <div>  <Link to="/"> <div className="nm"><GoHomeFill className='icn'/><p className='pl1'>Xisobot</p></div></Link>
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



<p className="drcfvg_xsdf">Davomat</p>

<p className="wer_davomat">9.08.2024</p>

</div>
  )
}

export default Davomat