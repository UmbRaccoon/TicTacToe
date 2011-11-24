package dataSource;

import java.util.HashMap;
import java.util.Map;

/**
 * A Singleton Repository for board data to be used for testing/while there is no database host;
 */
public class StubRepo
{
    private static Map<String, RepoBoard> boardMap = new HashMap<String, RepoBoard>(3000);
    public static RepoBoard getBoardById(String id)
    {
        return null;
    }
    public static void initialize()
    {
        //
    }
    public static void addBoard()
    {

    }
    public static void editBoard()
    {

    }
    public static void removeBoard()
    {

    }
}
