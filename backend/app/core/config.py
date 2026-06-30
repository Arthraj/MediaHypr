from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    APP_NAME: str
    HOST: str
    PORT: int

    SECRET_KEY: str
    ALGORITHM: str

    ACCESS_TOKEN_EXPIRE_MINUTES: int
    REFRESH_TOKEN_EXPIRE_DAYS: int

    DATABASE_URL: str

    UPLOAD_DIR: str

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )

# helps in loading settings only once and caching them for future use, improving performance and ensuring consistency across the application.
@lru_cache
def get_settings():
    return Settings()


settings = get_settings()