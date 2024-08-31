import { Button, Modal } from "flowbite-react";
import { InputText } from "../InputText";
import { useState } from "react";
import { useCreateNewServiceMutation } from "../../redux/features/services/servicesApi";
import { CustomLoader } from "../CustomLoader";
import toast from "react-hot-toast";
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
  const [createNewService, { isLoading, isError, isSuccess }] =
    useCreateNewServiceMutation();
  const handleCreateNewService = () => {
    const newService = {
      name: serviceName,
      description: serviceDesc,
      price: Number(servicePrice),
      duration: Number(serviceDuration),
    };
    createNewService(newService).unwrap();
    if (isSuccess) {
      toast.success("Service has been created!");
      onCloseFunc();
    }
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
      <Modal.Footer className=" block">
        {isLoading ? (
          <div className=" p-2">
            <CustomLoader />
          </div>
        ) : (
          <div className=" flex-row flex gap-2">
            <Button onClick={handleCreateNewService}>Create Service</Button>
            <Button color="gray" onClick={onCloseFunc}>
              Cancel
            </Button>
          </div>
        )}

        {isError && (
          <div className=" text-red-600 text-base font-bold">
            Error Occured while creating new Service
          </div>
        )}
        {isSuccess && (
          <div className=" text-green-500 text-base font-bold">
            New Service created.
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};
