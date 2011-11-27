import domain.InputResults;
import junit.framework.Assert;
import org.junit.Test;
import play.test.UnitTest;


/**
 * Created by IntelliJ IDEA.
 * @Author Axel Gauti Guðmundsson
 * Date: 24.11.2011
 * Time: 19:24
 */
public class InputResultsTestBlackBox extends UnitTest
{
    //Square 0,0 = 0; 0,1 = 1; 0,2 = 2; 1,0 = 3; ...; 2,2=8.
    @Test
    public void test()
    {
        int arr[] = new int[9];
        int inputSq = 0;
        int playerId = 1;
            InputResults inputResults = new InputResults(arr, inputSq, playerId);
            Assert.assertTrue(inputResults != null);
            Assert.assertTrue(inputResults.isSuccess());
            Assert.assertTrue(!inputResults.isVictory());
            Assert.assertEquals(inputResults.getRenderSquareId(), inputSq);
            Assert.assertEquals(inputResults.getRenderSymbolId(), playerId);
            InputResults inputResults2 = new InputResults(arr, inputSq, playerId);
            Assert.assertTrue(inputResults2 != null);
            Assert.assertFalse(inputResults2.isSuccess());
            Assert.assertFalse(inputResults2.isVictory());
    }
    @Test
    public void testSuccessAndResults()
    {
        int arr[] = new int[9];
        int arr2[] = new int[9];
        for (int inputSq = 0; inputSq<9; inputSq++)
        {
            InputResults inputResults = new InputResults(arr, inputSq, 1);
            InputResults inputResults2 = new InputResults(arr2, inputSq, 2);
            Assert.assertTrue(inputResults != null);
            Assert.assertTrue(inputResults.isSuccess());
            Assert.assertEquals(inputResults.getRenderSymbolId(), 1);
            Assert.assertEquals(inputResults.getRenderSquareId(), inputSq);
            Assert.assertTrue(inputResults2 != null);
            Assert.assertTrue(inputResults2.isSuccess());
            Assert.assertEquals(inputResults2.getRenderSymbolId(), 2);
            Assert.assertEquals(inputResults2.getRenderSquareId(), inputSq);
        }
    }
     /*
    public void testVictory();
    {
        int arr[] = new int[9];
        arr[0] = 0; arr[1] = 0; arr[2] = 0; arr[3] = 0; arr[4] = 0; arr[5] = 0; arr[6] = 0; arr[7] = 0; arr[8] = 0;
        InputResults results = new InputResults(arr, 1, 1)

    }               */

}
