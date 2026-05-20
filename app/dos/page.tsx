"use client";

import React, { useRef, useState } from "react";
import Hijo from "./hijo";
import "./style.css";

const PALABRAS = [
  {
    id: 1,
    palabra: "PRIVACIDAD",
    dir: "h",
    row: 0,
    col: 0,
    pista: "Protección de datos personales",
  },
  {
    id: 2,
    palabra: "SEGURIDAD",
    dir: "v",
    row: 0,
    col: 4,
    pista: "Protección de sistemas digitales",
  },
  {
    id: 3,
    palabra: "INCLUSION",
    dir: "h",
    row: 2,
    col: 1,
    pista: "Acceso igualitario a la tecnología",
  },
  {
    id: 4,
    palabra: "ETICA",
    dir: "v",
    row: 2,
    col: 0,
    pista: "Conjunto de principios morales digitales",
  },
  {
    id: 5,
    palabra: "DATOS",
    dir: "h",
    row: 5,
    col: 3,
    pista: "Información que protegemos en línea",
  },
  {
    id: 6,
    palabra: "SESGO",
    dir: "v",
    row: 4,
    col: 7,
    pista: "Prejuicio que puede tener la IA",
  },
];

const COLS = 15;
const ROWS = 15;

type Palabra = typeof PALABRAS[number];

type GridCell = {
  letra: string;
  words: number[];
} | null;

function buildGrid(): GridCell[][] {

  const grid: GridCell[][] = Array.from(
    { length: ROWS },
    () => Array(COLS).fill(null)
  );

  PALABRAS.forEach((w) => {

    for (let i = 0; i < w.palabra.length; i++) {

      const r = w.dir === "h"
        ? w.row
        : w.row + i;

      const c = w.dir === "h"
        ? w.col + i
        : w.col;

      if (
        r >= 0 &&
        r < ROWS &&
        c >= 0 &&
        c < COLS
      ) {

        if (!grid[r][c]) {
          grid[r][c] = {
            letra: w.palabra[i],
            words: [],
          };
        }

        grid[r][c]!.words.push(w.id);
      }
    }
  });

  return grid;
}

function getNum(r: number, c: number): number | null {
  return PALABRAS.find(
    (w) => w.row === r && w.col === c
  )?.id ?? null;
}

export default function Dos() {

  const GRID = buildGrid();

  const [valores, setValores] = useState<Record<string, string>>({});
  const [resueltas, setResueltas] = useState<Set<number>>(new Set());
  const [activa, setActiva] = useState<Palabra | null>(null);
  const [ganado, setGanado] = useState(false);

  const inputRefs = useRef<
    Record<string, HTMLInputElement | null>
  >({});

  function key(r: number, c: number) {
    return `${r}-${c}`;
  }

  function selectWord(id: number) {

    const w = PALABRAS.find(
      (p) => p.id === id
    );

    if (!w) return;

    setActiva(w);

    setTimeout(() => {
      inputRefs.current[key(w.row, w.col)]?.focus();
    }, 0);
  }

  function onFocus(r: number, c: number) {

    const cell = GRID[r][c];

    if (!cell) return;

    if (
      activa &&
      cell.words.includes(activa.id)
    ) return;

    const w = PALABRAS.find(
      (p) => p.id === cell.words[0]
    );

    if (w) setActiva(w);
  }

  function onInput(
    r: number,
    c: number,
    val: string
  ) {

    const upper = val.toUpperCase().slice(-1);

    setValores((prev) => ({
      ...prev,
      [key(r, c)]: upper,
    }));

    if (upper && activa) {

      const nr = activa.dir === "h"
        ? r
        : r + 1;

      const nc = activa.dir === "h"
        ? c + 1
        : c;

      setTimeout(() => {
        inputRefs.current[key(nr, nc)]?.focus();
      }, 0);
    }
  }

  function onKey(
    e: React.KeyboardEvent,
    r: number,
    c: number
  ) {

    if (
      e.key === "Backspace" &&
      !valores[key(r, c)] &&
      activa
    ) {

      const nr = activa.dir === "h"
        ? r
        : r - 1;

      const nc = activa.dir === "h"
        ? c - 1
        : c;

      setTimeout(() => {
        inputRefs.current[key(nr, nc)]?.focus();
      }, 0);
    }

    const moves: Record<string, [number, number]> = {
      ArrowRight: [r, c + 1],
      ArrowLeft: [r, c - 1],
      ArrowDown: [r + 1, c],
      ArrowUp: [r - 1, c],
    };

    if (moves[e.key]) {

      e.preventDefault();

      const [nr, nc] = moves[e.key];

      setTimeout(() => {
        inputRefs.current[key(nr, nc)]?.focus();
      }, 0);
    }
  }

  function verificar() {

    const nuevas = new Set<number>();

    PALABRAS.forEach((w) => {

      const ok = w.palabra
        .split("")
        .every((letra, i) => {

          const r = w.dir === "h"
            ? w.row
            : w.row + i;

          const c = w.dir === "h"
            ? w.col + i
            : w.col;

          return valores[key(r, c)] === letra;
        });

      if (ok) nuevas.add(w.id);
    });

    setResueltas(nuevas);

    if (nuevas.size === PALABRAS.length) {
      setGanado(true);
    }
  }

  function limpiar() {

    const nuevos = { ...valores };

    Object.keys(nuevos).forEach((k) => {

      const [r, c] = k
        .split("-")
        .map(Number);

      const celda = GRID[r][c];

      if (
        celda &&
        ![...resueltas].some((id) => {

          const w = PALABRAS.find(
            (p) => p.id === id
          );

          return w
            ? celda.words.includes(w.id)
            : false;
        })
      ) {
        delete nuevos[k];
      }
    });

    setValores(nuevos);
  }

  function getCellState(
    r: number,
    c: number
  ) {

    const cell = GRID[r][c];

    if (!cell) return "block";

    if (
      resueltas.size > 0 &&
      cell.words.some((id) => resueltas.has(id))
    ) {
      return "correct";
    }

    if (
      activa &&
      cell.words.includes(activa.id)
    ) {
      return "highlighted";
    }

    return "active";
  }

  return (

    <div className="banner-container">

      <div className="banner-header">

        <h1>
          CRUCIGRAMA ÉTICA DIGITAL
        </h1>

        <p>
          Completa las palabras clave
          sobre tecnología responsable.
        </p>

        <Hijo>
          Ocaiman
        </Hijo>

      </div>

      <div
        className="card"
        style={{ gridColumn: "1 / -1" }}
      >

        <div className="crucigrama-wrap">

          {/* TABLERO */}

          <div
            className="crucigrama-grid"
            style={{
              gridTemplateColumns: `repeat(${COLS}, 36px)`,
              gridTemplateRows: `repeat(${ROWS}, 36px)`,
            }}
          >

            {Array.from(
              { length: ROWS },
              (_, r) =>

                Array.from(
                  { length: COLS },
                  (_, c) => {

                    const cell = GRID[r][c];
                    const state = getCellState(r, c);
                    const num = getNum(r, c);

                    return (

                      <div
                        key={key(r, c)}
                        className={`cruz-cell ${state}`}
                      >

                        {cell && (
                          <>

                            {num && (
                              <span className="cruz-num">
                                {num}
                              </span>
                            )}

                            <input

                              ref={(el) => {
                                inputRefs.current[key(r, c)] = el;
                              }}

                              maxLength={1}

                              value={
                                valores[key(r, c)] ?? ""
                              }

                              disabled={
                                resueltas.size > 0 &&
                                cell.words.some((id) =>
                                  resueltas.has(id)
                                )
                              }

                              onChange={(e) =>
                                onInput(
                                  r,
                                  c,
                                  e.target.value
                                )
                              }

                              onFocus={() =>
                                onFocus(r, c)
                              }

                              onKeyDown={(e) =>
                                onKey(e, r, c)
                              }

                              className={`cruz-input ${state}`}
                            />

                          </>
                        )}

                      </div>
                    );
                  }
                )
            )}

          </div>

          {/* PISTAS */}

          <div className="crucigrama-clues">

            <div className="clues-panel">

              <h3>Horizontales</h3>

              {PALABRAS
                .filter((w) => w.dir === "h")
                .map((w) => (

                  <div
                    key={w.id}
                    className={`
                      clue
                      ${activa?.id === w.id ? "active-clue" : ""}
                      ${resueltas.has(w.id) ? "solved" : ""}
                    `}
                    onClick={() => selectWord(w.id)}
                  >

                    <span>{w.id}.</span>

                    {w.pista}

                  </div>
                ))}

            </div>

            <div className="clues-panel">

              <h3>Verticales</h3>

              {PALABRAS
                .filter((w) => w.dir === "v")
                .map((w) => (

                  <div
                    key={w.id}
                    className={`
                      clue
                      ${activa?.id === w.id ? "active-clue" : ""}
                      ${resueltas.has(w.id) ? "solved" : ""}
                    `}
                    onClick={() => selectWord(w.id)}
                  >

                    <span>{w.id}.</span>

                    {w.pista}

                  </div>
                ))}

            </div>

            <div className="clues-panel">

              <div className="cruz-score">
                {resueltas.size} / {PALABRAS.length} palabras
              </div>

              <div className="cruz-btns">

                <button
                  className="cruz-btn-check"
                  onClick={verificar}
                >
                  Verificar
                </button>

                <button
                  className="cruz-btn-clear"
                  onClick={limpiar}
                >
                  Limpiar
                </button>

              </div>

              {ganado && (

                <div className="cruz-win">

                  <h3>¡Completado!</h3>

                  <p>
                    Dominás la ética digital.
                  </p>

                  <Hijo>
                    Ocaiman
                  </Hijo>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}