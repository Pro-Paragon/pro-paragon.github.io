export default function Blockcade() {
  return (
    <>
      <h1>Blockcade</h1>
      <p className="lead">
        Slide blocks, complete the objectives, outwit the hazards trying to stop you.
      </p>
      <p>
        Blockcade is a sliding block puzzle about reading the board before you touch it. Every
        level is a grid with objectives waiting on it. Drag a block and it slides. The question
        is always what stops it, and whether that is where you wanted it.
      </p>

      <h2>How it plays</h2>
      <p>
        Complete every objective on the board and the level is solved. Sensors want a trigger
        block slid onto them: light them all and you are through. Simple to describe, and rarely
        simple to do, because the board is rarely empty.
      </p>
      <p>
        Movable blocks sit in the way and have to be shuffled aside. Walls do not move at all,
        and turn the open grid into corridors and dead ends. Some blocks are locked to a single
        axis, so the route you want may not be a route they can take.
      </p>

      <h2>The hazards</h2>
      <p>The board is not neutral. Things on it are actively working against you.</p>
      <ul>
        <li>
          <strong>Ice Blasters</strong> fire freezing air along the four compass directions on a
          timer. Anything caught in the blast is frozen solid for a while, including the block
          you were about to move.
        </li>
        <li>
          <strong>Wind Machines</strong> push streams of air across the board. Objective blocks
          caught in a stream are blown to the far end of it. Ordinary blocks shrug it off, which
          is often the problem.
        </li>
        <li>
          <strong>Slick floors</strong> refuse to let anything stop on them. A block that slides
          onto a slick keeps going, and a line of them will carry it all the way across the
          board or into a wall.
        </li>
      </ul>
      <p>
        Each one changes what &ldquo;slide this block left&rdquo; actually means. Learning to use
        them deliberately, by parking a block in a wind stream or letting a slick carry it
        further than a drag could, is where the game opens up.
      </p>

      <h2>Tools when you are stuck</h2>
      <p>
        A pickaxe clears a single block out of the way. A hazard disabler shuts a device down
        long enough to get past it. Neither solves a level for you, but both turn an impossible
        board into a solvable one.
      </p>

      <h2>Progression</h2>
      <p>
        Levels are graded across difficulty bands and mix board sizes, so the shape of the
        challenge keeps changing rather than just getting bigger. Every solve is rated on stars,
        with your best moves, time and score kept for each level. A solved level and a
        well-solved level are not the same thing, and the grid remembers which is which.
      </p>
      <p>Progress syncs to the cloud, so a new device picks up where the old one left off.</p>
      <p>
        Play it in a queue, play it in one sitting. It is a game about thinking, not about
        reflexes, and it waits for you.
      </p>

      <h2>Links</h2>
      <ul>
        <li><a href="/blockcade/privacy/">Privacy Policy</a></li>
        <li>
          Support:{' '}
          <a href="mailto:support@proparagonsoftware.com">support@proparagonsoftware.com</a>
        </li>
      </ul>
    </>
  );
}
