from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def songs():
    return {"message": "Songs Route"}