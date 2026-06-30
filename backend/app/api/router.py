from fastapi import APIRouter

from app.api.v1 import auth
from app.api.v1 import health
from app.api.v1 import songs
from app.api.v1 import users

api_router = APIRouter()

api_router.include_router(
    health.router,
    tags=["Health"],
)

api_router.include_router(
    auth.router,
    prefix="/auth",
    tags=["Authentication"],
)

api_router.include_router(
    users.router,
    prefix="/users",
    tags=["Users"],
)

api_router.include_router(
    songs.router,
    prefix="/songs",
    tags=["Songs"],
)