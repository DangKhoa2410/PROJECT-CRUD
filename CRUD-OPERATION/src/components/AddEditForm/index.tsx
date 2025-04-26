  import Input from '../Input';
  import Button from '../Button';
  import BoxDays from '../BoxDay';
  import { getCurrentVietnameseWeek } from '../../utils/date';
  import { ListUserRow } from '../../interfaces/listUsers';

  interface FormProps {
    list: ListUserRow;
    onHideModal?: () => void;
    addUser?: (e: React.FormEvent) => void;
    editList?: (e: React.FormEvent) => void;
    title: string;
    onChangeUserName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeEmailUser?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeRegisteredDate?: (date: string) => void;
    toggleShift?: (shift: 'ca chieu' | 'ca toi' | null, newShifts?: string[]) => void;
    isEditing?: boolean;
  }

  const AddEditForm = ({
    isEditing,
    editList,
    addUser,
    onHideModal,
    list,
    title,
    onChangeUserName,
    onChangeEmailUser,
    onChangeRegisteredDate,
    toggleShift
  }: FormProps) => {
    const { nameUser, email, registeredDate, shift } = list;
    const weekDays = getCurrentVietnameseWeek();

    const handleModal = (e: React.MouseEvent<HTMLFormElement>) => {
      e.stopPropagation();
    };

    const selectedShifts = Array.isArray(shift)
    ? shift.map((s) => (s === 'ca-chieu' ? 'ca chieu' : s === 'ca-toi' ? 'ca toi' : s) as 'ca chieu' | 'ca toi')
    : [];


    return (
      <div
        onClick={onHideModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <form
          onClick={handleModal}
          onSubmit={isEditing ? editList : addUser}
          className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <Input
              value={nameUser}
              onChange={onChangeUserName}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              value={email}
              onChange={onChangeEmailUser}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Chọn ngày làm</label>
            <BoxDays
              boxItems={weekDays}
              selectedDate={registeredDate}
              onSelectDate={(date) => {
                onChangeRegisteredDate?.(date);
                const newShifts = list.shiftByDate?.[date]?.[0]?.shifts || [];
                toggleShift?.(null, newShifts);
              }}
              variant="form"
            />

          </div>

          {registeredDate && (
            <div className="flex gap-4 mt-4">
              {['ca-chieu', 'ca-toi'].map((ca) => {
                const normalized = ca.replace('-', ' ') as 'ca chieu' | 'ca toi';
                const selected = selectedShifts.includes(normalized);

                return (
                  <div
                    key={ca}
                    onClick={() => toggleShift?.(normalized)}
                    className={`cursor-pointer flex-1 p-4 rounded-lg text-center transition border
                    ${selected ? 'bg-black text-white' : 'bg-gray-50 text-gray-800 hover:bg-black hover:text-white border-gray-300'}`}
                  >
                    <h5 className="text-lg font-semibold uppercase">{ca === 'ca-chieu' ? 'Ca chiều' : 'Ca tối'}</h5>
                    <p className="text-sm text-gray-300">
                      {ca === 'ca-chieu' ? '[10:00 - 14:00]' : '[17:00 - 23:00]'}
                    </p>
                  </div>
                );
              })}

            </div>
          )}

          <Button
            type="submit"
            text={isEditing ? "Update" : "Submit"}
            className="w-full mt-6 px-4 py-2 bg-blue text-white rounded-lg cursor-pointer hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </form>
      </div>
    );
  };

  export default AddEditForm;
