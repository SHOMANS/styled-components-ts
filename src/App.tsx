import { useState } from "react";
import AutoComplete from "./Components/AutoComplete";
import { Button, OutlindedButton } from "./Components/Button";
import Modal from "./Components/Modal";

function App() {
  const [inputChange, setInputChange] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleChange = (text: string) => {
    setInputChange(text);
  };

  const handleOpenModal: () => void = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div style={{ width: "50%", padding: "20px" }}>
        <AutoComplete
          placeholder="Auto Complete"
          onChange={handleChange}
          value={inputChange}
          name="autoComplete"
          data={["one", "two", "three"]}
        />
      </div>
      <Button onClick={handleOpenModal}>Press here</Button>
      <OutlindedButton onClick={handleOpenModal}>Press here</OutlindedButton>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <>
          <h3 style={{ marginBottom: "15px" }}>Modal</h3>
          <div>This Is A Modal By SHOMANS</div>
        </>
      </Modal>
    </>
  );
}

export default App;
