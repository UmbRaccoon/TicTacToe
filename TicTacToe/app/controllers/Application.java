package controllers;

import domain.InputResults;
import models.InputResultsModel;
import play.Play;
import play.mvc.*;
import play.server.Server;

/**
 * @author Axel
 */
public class Application extends Controller {



    public static void index()
    {
        render();
    }

    public static void initialize()
    {
        String newBoard = "0000000001";
        Scope.Session.current().put("board", newBoard);
        String yay = Scope.Session.current().get("board");
        renderJSON(true);

    }

    public static void input(int squareId)
    {

        InputResults results = InputResultsModel.updateSessionBoardAndReturnResults(squareId, Scope.Session.current());

        renderJSON(results);
    }

}