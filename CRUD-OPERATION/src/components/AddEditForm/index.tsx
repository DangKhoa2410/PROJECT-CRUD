import Input from '../Input';
import { ListUserRow } from '../../interfaces/listUsers';
import Button from '../Button';
interface FormProps {
  list: ListUserRow
  onHideModal?: () => void;
  addUser?: () => void;
  title: string;
  onChangeUserName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmailUser?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneUser?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDate?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing?: boolean;
  editList?: () => void ;
}
const AddEditForm = ({isEditing, editList, addUser, onHideModal, list, title, onChangeUserName, onChangeEmailUser, onChangePhoneUser, onChangeDate}: FormProps) => {
  const { nameUser, email, phone, date } = list

  const handleModal = (e: React.MouseEvent<HTMLFormElement>) => {
    e.stopPropagation()
  }

  return (
    <div
      onClick={onHideModal}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <form
        onClick={handleModal}
        className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">{title}</h2>

        <div>
          <label className="block text-sm font-medium text-gray mb-1">
            Name
          </label>
          <Input
            value={nameUser}
            onChange={onChangeUserName}
            className="w-full px-4 py-2 border border-gray rounded-lg focus:outline-none focus:ring focus:ring-blue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray mb-1">
            Email
          </label>
          <Input
            value={email}
            onChange={onChangeEmailUser}
            type="email"
            className="w-full px-4 py-2 border border-gray rounded-lg focus:outline-none focus:ring focus:ring-blue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray mb-1">
            Phone
          </label>
          <Input
            value={phone}
            onChange={onChangePhoneUser}
            type="number"
            className="w-full px-4 py-2 border border-gray rounded-lg focus:outline-none focus:ring focus:ring-blue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray mb-1">
            Date
          </label>
          <Input
            value={date}
            onChange={onChangeDate}
            type="date"
            className="w-full px-4 py-2 border border-gray rounded-lg focus:outline-none focus:ring focus:ring-blue"
          />
        </div>

        <Button 
          onClick={isEditing ? editList : addUser} text={isEditing ? 'Update' : 'Submit'}
          className="w-full px-4 py-2 bg-blue text-white rounded-lg cursor-pointer hover:bg-blue focus:outline-none focus:ring focus:ring-blue"
        />
      </form>
    </div>
  );
};

export default AddEditForm;
