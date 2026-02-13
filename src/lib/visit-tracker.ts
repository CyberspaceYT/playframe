const STORAGE_KEY = "playframe_visits";

interface VisitData {
  [gameId: string]: number;
}

function getVisitData(): VisitData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveVisitData(data: VisitData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage full or unavailable
  }
}

export function recordVisit(gameId: string) {
  const data = getVisitData();
  data[gameId] = (data[gameId] || 0) + 1;
  saveVisitData(data);
}

export function getTopGames(count: number): { gameId: string; visits: number }[] {
  const data = getVisitData();
  return Object.entries(data)
    .map(([gameId, visits]) => ({ gameId, visits }))
    .sort((a, b) => b.visits - a.visits)
    .slice(0, count);
}

export function getVisitCount(gameId: string): number {
  const data = getVisitData();
  return data[gameId] || 0;
}
