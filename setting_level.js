//functions which setup the level

function setLevel1Walls() {
  for (let i = 0; i < 22; i++) {
    for (let j = 0; j < 10; j++) {
      if (i >= 2 && i < 20 && j >= 1 && j < 9) {
        tiles[i][j].wall = false;
      }
      else {
        tiles[i][j].wall = true;
      };
    };
  };
};

function setLevel1Goal() {
  tiles[2][1].goal = true;
  tiles[3][1].goal = true;
  tiles[4][1].goal = true;
  tiles[2][2].goal = true;
  tiles[3][2].goal = true;
  tiles[4][2].goal = true;
};

function setLevel1SafeArea() {
  tiles[17][8].goal = true;
  tiles[18][8].goal = true;
  tiles[19][8].goal = true;
  tiles[17][7].goal = true;
  tiles[18][7].goal = true;
  tiles[19][7].goal = true;
};

function setEdges() {
  // The Maze walls - The first bottom row.
  tiles[19][6].edges.push(2);
  tiles[18][6].edges.push(2);
  tiles[17][6].edges.push(2);
  tiles[16][6].edges.push(2);
  tiles[15][6].edges.push(2);
  tiles[14][6].edges.push(2);
  tiles[13][6].edges.push(2);
  tiles[12][6].edges.push(2);
  tiles[11][6].edges.push(2);
  tiles[10][6].edges.push(2);
  tiles[9][6].edges.push(2);
  tiles[8][6].edges.push(2);
  tiles[7][6].edges.push(2);
  tiles[6][6].edges.push(2);
  tiles[5][6].edges.push(2);
  // The Maze walls - The second bottom row.
  tiles[5][4].edges.push(2);
  tiles[6][4].edges.push(2);
  tiles[7][4].edges.push(2);
  tiles[8][4].edges.push(2);
  tiles[12][4].edges.push(2);
  tiles[13][4].edges.push(2);
  tiles[14][4].edges.push(2);
  tiles[17][4].edges.push(2);
  tiles[18][4].edges.push(2);
  tiles[19][4].edges.push(2);
  // Lil loopies.
  tiles[10][4].edges.push(1);
  tiles[10][3].edges.push(2);
  tiles[9][4].edges.push(1);
  tiles[9][5].edges.push(1);
  tiles[10][5].edges.push(1);
  tiles[10][6].edges.push(1);
  // The Maze walls - The third bottom row.
  
  tiles[11][3].edges.push(1);
  tiles[11][4].edges.push(1);

  // first long line (top)
  tiles[2][2].edges.push(2);
  tiles[3][2].edges.push(2);
  tiles[4][2].edges.push(2);
  tiles[5][2].edges.push(2);
  tiles[6][2].edges.push(2);
  tiles[7][2].edges.push(2);
  tiles[8][2].edges.push(2);
  tiles[9][2].edges.push(2);
  tiles[10][2].edges.push(2);
  tiles[11][2].edges.push(2);
  // Lil lines!
  tiles[6][1].edges.push(1);
  tiles[9][1].edges.push(1);
  tiles[12][1].edges.push(1);
  tiles[14][1].edges.push(1);
  // The Maze walls - The fourth bottom row.
  tiles[19][1].edges.push(2);
  tiles[17][1].edges.push(1);
  tiles[17][2].edges.push(1);
  tiles[18][2].edges.push(2);
  // The outer walls.
  for (let i = 1; i< 21; i++) {
    for (let j = 1; j< 9; j++) {
      if (!tiles[i][j].wall) {
        if (tiles[i+1][j].wall) {
          tiles[i][j].edges.push(1);
        }
        if (tiles[i][j+1].wall) {
          tiles[i][j].edges.push(2);
        }
        if (tiles[i-1][j].wall) {
          tiles[i][j].edges.push(3);
        }
        if (tiles[i][j-1].wall) {
          tiles[i][j].edges.push(4);
        }
      }
    }
  }
};

function setDots() {
  dots.push(new Dot(tiles[2][5], tiles[9][5], 1));
  dots.push(new Dot(tiles[6][2], tiles[17][2], 1));
  dots.push(new Dot(tiles[19][5], tiles[11][5], -0.8));
};

function setSolids() {
  // outer lines
  solids.push(new Solid(tiles[2][1], tiles[2][9]));
  solids.push(new Solid(tiles[1][1], tiles[20][1]));
  solids.push(new Solid(tiles[1][9], tiles[20][9]));
  solids.push(new Solid(tiles[20][1], tiles[20][9]));
  
  // The vertical inner maze walls
  solids.push(new Solid(tiles[7][1], tiles[7][2]));
  solids.push(new Solid(tiles[10][1], tiles[10][2]));
  solids.push(new Solid(tiles[13][1], tiles[13][2]));
  solids.push(new Solid(tiles[15][1], tiles[15][2]));
  solids.push(new Solid(tiles[18][1], tiles[18][2]));
  solids.push(new Solid(tiles[18][2], tiles[18][3]));

  // middle vertical lines
  solids.push(new Solid(tiles[10][4], tiles[10][6]));
  solids.push(new Solid(tiles[11][4], tiles[11][7]));
  solids.push(new Solid(tiles[12][3], tiles[12][5]));
  
  // The horizontal inner maze walls.  
  solids.push(new Solid(tiles[1][3], tiles[12][3]));
  solids.push(new Solid(tiles[19][2], tiles[20][2]));
  solids.push(new Solid(tiles[18][3], tiles[19][3]));
  solids.push(new Solid(tiles[1][3], tiles[12][3]));
  solids.push(new Solid(tiles[10][4], tiles[11][4]));
  solids.push(new Solid(tiles[5][5], tiles[9][5]));
  solids.push(new Solid(tiles[12][5], tiles[15][5]));
  solids.push(new Solid(tiles[17][5], tiles[20][5]));
  solids.push(new Solid(tiles[5][7], tiles[20][7]));
};
