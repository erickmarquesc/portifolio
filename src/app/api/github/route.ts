import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_API_URL = "https://api.github.com/users/erickmarquesc/repos";

  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Não foi possível encontrar repositórios" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: `Erro ao buscar repositórios | ${error}` },
      { status: 500 }
    );
  }
}
