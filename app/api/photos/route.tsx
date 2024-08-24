import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { contentData } from '@/utils/contentData';

export async function GET(req: Request) {
  try {
   const dataContent = contentData

    return NextResponse.json({ dataContent });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to read images directory' }, { status: 500 });
  }
}
