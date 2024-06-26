from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')  #if we are using jwt for the authentication
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
