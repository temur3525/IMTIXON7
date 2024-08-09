import './Mirojatlar.css'
import { Link } from "react-router-dom"
import { GoHomeFill } from "react-icons/go";
import { PiStudentBold } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md"
import img2 from "../../assets/images/menu.svg"
import { MdMenuOpen } from "react-icons/md";
const Mirojatlar = () => {
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
<p className="plk_plk_plk">Murojatlar</p>
<p className="pla_pla">Bugungi murojatlar</p>

<table className='table_murojatlar'>
<tr className='tr_1'>
  <th className='th_1'>Nº</th>
  <th className='th_1'>O’quvchi ismi</th>
  <th className='th_1'>Telefon nomer</th>
  <th className='th_1'>Izoh</th>
</tr>
<tr className='tr_2'>
  <td>1</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
<tr className='tr_3'>
  <td>2</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
<tr className='tr_4'>
  <td>3</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
<tr className='tr_5'>
  <td>4</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
</table>

<p className="po_po">26.03.2022 kungi murojatlar</p>

<table className='table__murojat1'>
<tr className='tr_1'>
  <th className='th_1'>Nº</th>
  <th className='th_1'>O’quvchi ismi</th>
  <th className='th_1'>Telefon nomer</th>
  <th className='th_1'>Izoh</th>
</tr>
<tr className='tr_2'>
  <td>1</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
<tr className='tr_3'>
  <td>2</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
<tr className='tr_4'>
  <td>3</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
<tr className='tr_5'>
  <td>4</td>
  <td>Muxamadaliyev Ibroxim</td>
  <td>+998900113861</td>
  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum hello <br /> nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. </td>
  <td><MdDeleteOutline className='delete_icon'/></td>
</tr>
</table>
<img src={img2} alt="" className="img2_murojatlar" />

<div className="hg_ug_uy">
<p className="poer_xisobotlar">CRM <br /> PANEL</p>
<div className="pot_xisobotlar_wer"></div>
<MdMenuOpen className='menu_icon_xisobotlar'/>
</div>
<p className="wer_murojatlar">9.08.2024</p>

</div>
  )
}

export default Mirojatlar