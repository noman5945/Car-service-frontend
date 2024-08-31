import { Button, Modal } from "flowbite-react";
import { InputText } from "../InputText";
import { useState } from "react";
type NewServiceModalProps = {
  openModal: boolean;
  onCloseFunc: () => void;
};
export const NewServiceModal = ({
  openModal,
  onCloseFunc,
}: NewServiceModalProps) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const handleCreateNewService = () => {
    const newService = {
      name: serviceName,
      description: serviceDesc,
      price: Number(servicePrice),
      duration: Number(serviceDuration),
    };
    console.log(newService);
  };
  return (
    <Modal show={openModal} onClose={onCloseFunc}>
      <Modal.Header>Create New Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6 flex flex-col">
          <InputText
            textType="text"
            inputLabel="Service Name"
            onChangeFunc={setServiceName}
          />
          <InputText
            textType="text"
            inputLabel="Service Description"
            onChangeFunc={setServiceDesc}
          />
          <InputText
            textType="text"
            inputLabel="Service Price(Taka)"
            onChangeFunc={setServicePrice}
          />
          <InputText
            textType="text"
            inputLabel="Service Duration(Hours)"
            onChangeFunc={setServiceDuration}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCreateNewService}>Create Service</Button>
        <Button color="gray" onClick={onCloseFunc}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
