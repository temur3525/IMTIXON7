import './Xisobot.css'
import { Link } from "react-router-dom"
import { GoHomeFill } from "react-icons/go";
import { PiStudentBold } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import img from "../../assets/images/1.svg"
import img2 from "../../assets/images/menu.svg"
import { MdMenuOpen } from "react-icons/md";
import img3 from "../../assets/images/2.svg"
const Xisobot = () => {
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
<p className="kj">Xisobod</p>
<div className="tem_xiso">
  <p className="pla_xi">Jami o’quvchilar soni:</p>
<h1 className="pla_xcv">255 ta</h1>
<img src={img3} alt=""  className='hg_ter'/>
</div>
<div className="tem_xiso1">
  <p className="pla_xi1">O’qituvchilar soni:</p>
<h1 className="pla_xcv1">10 ta</h1>
<img src={img3} alt=""  className='hg_ter1'/>

</div>
<div className="tem_xiso2">
  <p className="pla_xi2">Shu oy tark etganlar:</p>
<h1 className="pla_xcv2">60 ta</h1>
<img src={img3} alt=""  className='hg_ter2'/>


</div>
<div className="tem_xiso3">
  <p className="pla_xi3">Jami guruhlar soni</p>
<h1 className="pla_xcv3">26 ta</h1>
<img src={img3} alt=""  className='hg_ter3'/>


</div>

<img src={img} alt="" className="img" />

<img src={img2} alt="" className="img2_xisobot" />
<p className="poer_xisobotlar">CRM <br /> PANEL</p>
<div className="pot_xisobotlar_wer"></div>
<MdMenuOpen className='menu_icon_xisobotlar'/>




<p className="wer_xisobod">9.08.2024</p>

    </div>
  )
}

export default Xisobot