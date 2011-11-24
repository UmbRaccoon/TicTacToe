package services;


import domain.InputResults;

/**
 * A general definition for a service class that manages basic board tasks
 */
public interface BoardService
{
    public int initializeBoard();
    public InputResults addInput(int squareId, int boardId);
}
