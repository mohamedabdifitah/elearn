import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import AuthContext from '../context/authprovider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { openModal,setOpenModal,url,setUrl} = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpenModal(false);
    setUrl()

  }

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display:"flex",alignItems:"center",justifyContent:"center"}}
      >
        {/* <video src='https://mp4-c.udemycdn.com/2021-04-16_11-26-46-ffc36ba144069eb804a9e8ea9d531097/1/WebHD_720p.mp4?Expires=1694198768&Signature=A0uu6O1zC7Ks53BdB-oD-O1h7nnkW9QGCYd~QcyDT2G6nEgFNd5SGr-kbpCUiKO3Wj3yQ4zkeaY-0ZXU3FJL6XqJB7oD7cGICs-vW0Im82pqeTSnlQfRYTI-Ra97hInNbDry3QRZ385pmGViJEdCryYSF~ZzuZk4XXwMMh8aIEC30eWF25RY5pLdDAEihgfKsocCLTJhNVs3ojCBBxBxb98pYrpDU~DnZD-l8wJql2sMrxbxUqaYyjOhAcH1RZLMTEicHTWB-zbxGgUE3-Ki9c3Op0QIwA~PIfQDOG9XW7cL6ffU6viEg64Iu~qwdyzmpF3KsFKlt7O0-9ykhf0Zpw__&Key-Pair-Id=APKAITJV77WS5ZT7262A' autoPlay controls width="700px" height="300px" /> */}
        <iframe  width="900" height="400" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Modal>
    </div>
  );
}