package services;


import dataSource.BoardDTO;
import domain.InputResults;

/**
 * A general definition for a service class that manages basic board tasks
 */
public interface BoardService
{
    public int initializeBoard() throws Exception;
    public InputResults addInput(int squareId, String boardId);
}
