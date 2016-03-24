require 'rails_helper'

RSpec.describe User, type: :model do

  context 'filled in user' do

    let(:user){build(:user)}

     it 'should be at least 18 years old' do
       user.birthday = "2001-08-11 14:55:43"

       expect(user.valid?).to eq(false)
     end

    it 'name should be present' do
      user.name = ""

      expect(user.valid?).to eq(false)
    end

    it 'birthday should appear as MM-DD-YYYY' do

      expect(user.get_pretty_birthday).to eq("08-11-1987")
    end

    it 'should have full name' do
      user.name = "Sam"

      expect(user.valid?).to eq(false)
    end

    it 'password should be at least 8 characters long' do
      user.password = "fail"

      expect(user.valid?).to eq(false)
    end

  end

end
