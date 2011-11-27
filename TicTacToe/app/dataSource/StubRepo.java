package dataSource;

import java.util.*;

/**
 * A Singleton Repository for board data to be used for testing/while there is no database host;
 */
public class StubRepo
{
    private static Map<String, BoardDTO> boardMap = new HashMap<String, BoardDTO>(3000);
    private static int mapCounter = 0;
    public static BoardDTO getBoardById(String boardId)
    {
        if (boardMap.containsKey(boardId))
        {
            BoardDTO boardDTO = boardMap.get(boardId);
            Calendar now = Calendar.getInstance();
            boardDTO.setLastMove(now.getTime());
            boardMap.put(boardId, boardDTO);
            return boardDTO;
        }
        else
        {
            throw new RuntimeException("Game doesnt exist, try again!");
        }
    }
    public static void initialize()
    {
        boardMap = new HashMap<String, BoardDTO>(3000);
    }
    public static int initializeNewBoard() throws Exception
    {
        int iter = 0;
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.HOUR_OF_DAY, 1);
        while (boardMap.containsKey((mapCounter+iter+1)%3000) && iter < 3000)
        {
            BoardDTO boardDTO = boardMap.get(mapCounter+iter+1);
            if (boardDTO.getLastMove().after(cal.getTime()))
                break;
            iter++;
        }
        if (iter == 3000)
            throw new Exception("Too many players, Try again later");
        boardMap.put(Integer.toString(mapCounter+iter+1),new BoardDTO());
        mapCounter++;
        return mapCounter+iter;
    }
    public static void editBoard(BoardDTO boardDTO, String boardId) throws RuntimeException
    {
        if (boardMap.containsKey(boardId))
        {
            boardMap.put(boardId, boardDTO);
        }
    }
    public static void removeBoard(String boardId)
    {
        if (boardMap.containsKey(boardId))
        {
            boardMap.remove(boardId);
        }
    }
}
