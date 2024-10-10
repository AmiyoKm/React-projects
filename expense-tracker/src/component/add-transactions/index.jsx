import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({onClose , isOpen}) {
    const {formData , setFormData ,value ,setValue , handleFormSubmit} = useContext(GlobalContext);
    function handleFormChange(event){
        setFormData({
            ...formData,
             [event.target.name] : event.target.value,
        })
    }
    function handleSubmit(event){
        event.preventDefault();
      handleFormSubmit(formData)
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transactions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter description</FormLabel>
              <input
                type="text"
                placeholder="Enter Transaction Description"
                name="description"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter amount</FormLabel>
              <input
                type="number"
                placeholder="Enter Transaction Amount"
                name="amount"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio checked={formData.type=== 'income'} onChange={handleFormChange}
              value="income" colorScheme="blue" name="type">
                Income
              </Radio>
              <Radio checked={formData.type=== 'expense'} onChange={handleFormChange}
               value="expense" colorScheme="red" name="type">
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>Cancel</Button>
            <Button type="submit" onClick={onClose}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
