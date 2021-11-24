package com.tw;

import com.tw.Item.Item;

import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

public interface Controller{
    @Operation(summary = "Get all items")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All the items were returned", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No items found", content = @Content) })
    List<Item> getAllItems();

    @Operation(summary = "Delete item by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The item was deleted", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No item found", content = @Content) })
    String deleteItem(int id);

    @Operation(summary = "Add class")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "The item was added", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content) })
    Item addClass(Item item);

    @Operation(summary = "Update by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The item was updated", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No item found", content = @Content) })
    Item updateItem(int id, Item item);

}
