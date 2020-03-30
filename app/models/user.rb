class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  # *** REMETTRE :registerable dans le cas d'un nouveau sign_in *** 
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable
end
