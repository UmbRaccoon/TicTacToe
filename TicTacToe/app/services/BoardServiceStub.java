package services;

import dataSource.BoardDTO;
import dataSource.StubRepo;
import domain.InputResults;

/**
 * A class that manages basic board tasks using a in memory repository.
 */
public class BoardServiceStub implements BoardService
{
    public InputResults addInput(int squareId, String boardId)
    {
        BoardDTO boardDTO = StubRepo.getBoardById(boardId);
        InputResults results = new InputResults(boardDTO.getBoard(), squareId, boardDTO.getNextPlayerId());
        if (results.isSuccess())
        {
            if (results.isVictory())
            {
                StubRepo.removeBoard(boardId);
            }
            else
            {
                boardDTO.addMove(squareId);
                StubRepo.editBoard(boardDTO, boardId);
            }
        }
        return results;
    }

    public int initializeBoard() throws Exception
    {
       return StubRepo.initializeNewBoard();
    }
}
